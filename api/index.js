//imports needed 
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")



app.use(cors());

//configure dotenv
dotenv.config();

// database configuration with mongo db URL
mongoose.connect(process.env.MONGO_URL).then(()=>{
console.log("Database connected Successfully!")
    }).catch((err)=>{
        console.log(err);
    });


// REst API end points declaration
app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)




// assign port 
app.listen(process.env.PORT || 6600, ()=>{
    console.log("backend Server is running!");
})