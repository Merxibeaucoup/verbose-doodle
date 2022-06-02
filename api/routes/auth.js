const router = require("express").Router();
const User = require("../models/User"); 
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req, res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,

        //encrypt password using crypto-JS
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    try{
    
   const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch(err){
        res.status(500).json(err)
    }


});

//Login

router.post("/login", async (req, res)=>{

try{

    const user = await User.findOne({
        username: req.body.username,
    });
    //if theres no user with such username , throw 401 error  
    //HTTP 401 means  lacks valid authentication credentials for the requested resource
    !user && res.status(401).json("Wrong credentials")


    // decrypt password
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

    // turn passord into a string
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    // if password isnt equals to typed in password throw 401 error
    //HTTP 401 means  lacks valid authentication credentials for the requested resource
    OriginalPassword !== req.body.password && res.status(401).json("Wrong credentials")

// create a json web token
// check id inside json web token 
//for example to delete or update user 

    const accessToken = jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin,
    }, process.env.JWT_SEC,
    // access token expires in 4 days 
    {expiresIn:"2d"}
    
    
    );

    // spread operator (...) allows you to spread out elements of an iterable object such as an array, map, or set into individual elements

    // hide password 
    const { password, ...others} = user._doc;

    res.status(200).json({...others, accessToken});
        
}catch(err){
    res.status(500).json(err)

}
    

}
)



module.exports = router