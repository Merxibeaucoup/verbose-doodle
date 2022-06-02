//imports needed
const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();


//CREATE product
//only admin can create product
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//update product
router.put("/:id", verifyTokenAndAdmin, async (req, res)=>{
   // proceed to update product
   try{

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
        // take everything inside body and set it again 
        $set: req.body
    }, {new:true})

    res.status(200).json(updatedProduct);

   }catch(err){
       res.status(500).json(err);
   }

});


//delete product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) =>{
    try{

        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("product has been deleted!")

    }catch(err){
        res.status(500).json(err);
    }
})

//get  product
// everybody can see product

router.get("/find/:id", async (req, res) =>{
    try{

       const product = await Product.findById(req.params.id);
       
    res.status(200).json(product);

    }catch(err){
        res.status(500).json(err);
    }
})

//get all products
// everybody can see products
router.get("/", async (req, res) =>{

    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{

      let products;

      if(qNew){
        products = await Product.find().sort({createdAt: -1}).limit(1); 
        //if category query is inside this query, fetch products
      }else if(qCategory){
        products = await  Product.find({
          categories :{
            $in: [qCategory],

        }})
        // esle if there is no query, products will be all products inside the DB
      }else{
        products = await Product.find();
      }

       
    res.status(200).json(products);

    }catch(err){
        res.status(500).json(err);
    }
})




module.exports = router