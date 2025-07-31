const router = require("express").Router();
const { authenticateToken } = require("./userauth");
const Book = require("/models/book");
const Order=require("../models/order");
const User= require("../models/user");

router.post("/place-order",authenticateToken, async (requestAnimationFrame,res)=>{
    try{
        const { id } =req.headers;
        const { order }=req.body;
        for(const orderData of order){
            const newOrder =new order({user:id,book:orderData._id});
            const orderDataFromDb=await newOrder.save();

            await user.findByIdAndUpdate(id,{
                $push: {orders: orderDataFromDb._id},
            });
        }
        return res.json({
            status:"success",
            message:"order placed successfully",
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"an error occurred"});
    }
});
//order of particular user
router.get("/get-order-history", authenticateToken,async (req,res)=>{
    try{
        const { id }=req.headers;
        const userData = await User.findById(id).populate({
            path:"orders",
            populate:{path: "book"},
        });

        const orderData = userData.orders.reverse();
        return res.json({
            status:"success",
            data:orderData,
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "An error occurred"});
    }
});

//get all order details --admin
router.get("/get-all-orders",authenticateToken, async (req,res)=>{
    try{
        const userData = await Order.find()
        .populate({
            path:"book",
        })
        .populate({
            path:"user",
        })
        .sort({ createAt: -1});
        return res.json({
            status:"success",
            data: userData,
        });
    }catch (error){
        console.log(error);
        return res.status(500).json({message:"an error occurred"});
    }
});

//updated order --admin 
router .put("/update-status/:id",authenticateToken, async (req,res)=>{
    try{
        const { id }=res.params;
        await Order.findByIdAndUpdate(id,{status: req.body.status});
        return res.json({
            status:"success",
            message:"status updated successfully",
        });
    }catch (error){
        console.log(error);
            console.log(error);
            return res.status(500).json({message:"an error occurred"});
    }
});

module.exports=router;