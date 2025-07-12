const router = require("express").Router();
const User = require("../models/user");
const { authenticateToken } = require("./userauth");

router.put("/add-to-cart",authenticateToken,async (req,res)=>{
    try{
        const{ bookid,id }=req.headers;
        const userData=await User.findById(id);
        const isBookincart= userData.cart.includes(bookid);
        if(isBookincart){
            return res.json({
                status:"succcess",
                message: "book is already in cart",
            });
        }
        await User.findByIdAndUpdate(id,{
            $push: { cart: bookid},
        });

        return res.json({
            status:"success",
            message: "book added to cart",
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"an error occured"});
    }
});

router.put("/remove-from-cart/:bookid", authenticateToken, async (req,res)=>{
    try{
        const{ bookid }=req.params;
        const{ id }=req.headers;
        await User.findByIdAndUpdate(id,{
            $pull:{ cart:bookid },
        });
        return res.json({
            status:"success",
            message: "book removes from cart",
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"an error occurred"});
    }
});

router.get("/get-user-cart",authenticateToken, async (req,res)=>{
    try{
        const { id }= req.headers;
        const userData=await User.findById(id).populate("cart");
        const cart = userData.cart.reverse();

        return res.json({
            status:"success",
            data:cart,
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"an error occurred"});
    }
});
module.exports = router;