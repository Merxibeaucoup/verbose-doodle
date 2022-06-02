const mongoose = require("mongoose");

//create product schema 

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, required:true, unique:true},
        artist: {type: String, required:true},
        desc: {type: String, required: true}, 
        img: {type:String, required:true},
        categories: {type: Array},
        price: {type: Number, required:true},
        inStock: {type: Boolean, default:true},
        // img: {type:String, required:true},
        // img: {type:String, required:true},
       
   
    }, 
    {timestamps: true}
    )


    // export model

    module.exports = mongoose.model("Product", ProductSchema)