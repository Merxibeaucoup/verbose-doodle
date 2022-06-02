//imports needed
const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();


//update user
router.put("/:id", verifyTokenAndAuthorization, async (req, res)=>{
   // before updating , verify password
   // encrypt password here alsp 
   if(req.body.password){
    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
   }

   // proceed to update user
   try{

    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        // take everything inside body and set it again 
        $set: req.body
    }, {new:true})

    res.status(200).json(updatedUser);

   }catch(err){
       res.status(500).json(err);
   }

});


//delete user
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) =>{
    try{

        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted!")

    }catch(err){
        res.status(500).json(err);
    }
})

//get  user
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) =>{
    try{

       const user = await User.findById(req.params.id);
       // hide password 
        // spread operator (...) allows you to spread out elements of an iterable object such as an array, map, or set into individual elements
    const { password, ...others} = user._doc;
    res.status(200).json(others);

    }catch(err){
        res.status(500).json(err);
    }
})

//get all users
router.get("/", verifyTokenAndAdmin, async (req, res) =>{

    const query = req.query.new
    try{

       const users = query 
            ? await User.find().sort({_id:-1}).limit(5) 
            : await User.find();
       
    res.status(200).json(users);

    }catch(err){
        res.status(500).json(err);
    }
})

//get user stats
// returns total number of users per month
router.get("/stats", verifyTokenAndAdmin, async (req, res) =>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1));

    try{

        const data = await User.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {
                $project:{
                    month: {$month: "$createdAt"}, // take the month number at createdAt in db and assign to month
                },
            },
            {
                $group:{
                    _id: "$month", // month id example , 1 for january , 2 for february.....
                    total: {$sum:1}, //total user number of the month
                }

            },
        ]);

        res.status(200).json(data);

    }catch(err){
        res.status(500).json(err);
    }

})



module.exports = router