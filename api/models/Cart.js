const mongoose = require("mongoose");

//create Cart schema 

const CartSchema = new mongoose.Schema(
    {
        userId: {type: String, required:true},
        products: [
            {
                productId:{
                    type:String
                },
                quantity:{
                    type: Number,
                    default: 1,
                },
            },
        ], 
       
   
    }, 
    {timestamps: true}
    )


    // export model

    module.exports = mongoose.model("Cart", CartSchema)