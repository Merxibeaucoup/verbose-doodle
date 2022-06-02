// needed imports
const jwt = require("jsonwebtoken");


const verifyToken = (req,res, next) =>{
    const authHeader = req.headers.token

    if(authHeader){

        // split with a space  because there is a space between beare and token in postman
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) =>{
            if(err) res.status(403).json("Token is not Valid!");
            req.user = user
            next();
        })

    }else{
        return res.status(401).json("you are not authenticated!");
    }
};


 // verify who token belongs to , Admin or client
const verifyTokenAndAuthorization = (req, res, next)=>{

    //if user id = params id or is an admin , you can continue you root function next()
    verifyToken(req, res, next, ()=>{
        if (req.user.id === req.params.id || req.user.isAdmin){
            next();
        
        }else {
            res.status(403).json("You are not authorized to perform this action ! ");
        }
    })
};



//verify is user is admin
const verifyTokenAndAdmin = (req, res, next)=>{

    //if user is an  admin , you can continue you root function next()
    verifyToken(req, res, ()=>{
        if (req.user.isAdmin){
            next();
        
        }else {
            res.status(403).json("You are not authorized to perform this action ! ");
        }
    });
};

module.exports  = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };