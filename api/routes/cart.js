//imports needed
const Cart = require("../models/Cart");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();


//CREATE cart
//every user can create cart
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
  
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//update product
//only authorized user can update  his own cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res)=>{
   // proceed to update cart
   try{

    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
        // take everything inside body and set it again 
        $set: req.body
    }, {new:true})

    res.status(200).json(updatedCart);

   }catch(err){
       res.status(500).json(err);
   }

});


//delete product
//only authorized user can delete his own  cart

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) =>{
    try{

        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted!")

    }catch(err){
        res.status(500).json(err);
    }
})

//get  User Cart
// everybody can see product

router.get("/find/:userId", verifyTokenAndAuthorization,  async (req, res) =>{
    try{

       const cart = await Cart.findOne({userId: req.params.userId});
       
    res.status(200).json(cart);

    }catch(err){
        res.status(500).json(err);
    }
})

//get all carts
//only admin can reach this data 
router.get("/", verifyTokenAndAdmin, async (req, res)=>{
     
    try{

        const carts = await Cart.find();

        res.status(200).json(carts);

    }catch(err){
        res.status(500).json(err);
    }
})





module.exports = router