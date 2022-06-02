const mongoose = require("mongoose");

//create User schema 

const UserSchema = new mongoose.Schema(
    {
        username: {type: String, required:true, unique:true},
        email: {type: String, required: true, unique: true}, 
        password:{type:String, required:true},
        isAdmin:{
            type:Boolean,
            default: false,
        },

        img:{type:String},
    
    }, 
    {timestamps: true}
    )


    // export model

    module.exports = mongoose.model("User", UserSchema)