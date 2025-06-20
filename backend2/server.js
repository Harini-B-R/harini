// import express from "express";
// import mongoose from "mongoose";

// const app = express();
// const port = 5000;

// app.use(express.json()); // Required for parsing JSON request body!

// const mongourl = "mongodb://localhost:27017/dbmodel";

// // Connect to MongoDB
// mongoose.connect(mongourl).then(() => {
//   console.log("DB connected");

//   // Start server after DB is connected
//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });
// }).catch(err => {
//   console.error("MongoDB connection error:", err.message);
// });

// // Schema and Model
// const userSchema = new mongoose.Schema({
//   username:String,
//   password:Number
//  });

// const UserModel = mongoose.model("users", userSchema);
// // const express=require("express");


// app.get('/getuser',async(req,res)=>{

//     try{
//         const data=await UserModel.find();
//         console.log("db data is",data);
//         res.json(data);
//     }
//     catch(err)
//     {
//         console.log("error occured",err.message);
//         res.status(500).json({"message":"server error"});
//     }
// })
// app.post('/create',async(req,res)=>{
//     try{
//          const {username,password}=req.body;
//          const newuser=new UserModel({name,age});
//          const data=await newuser.save();
//          res.status(201).json(data);
//   } catch (err) {
//     res.status(500).json({ message: "server error" });
//   }

    
    
// })
// app.delete("/deleteUser/:id", async (req, res) => {
//   try {
//     const userId = req.params.id.trim();
//     const result = await UserModel.findByIdAndDelete(userId);
    
//     if (result) {
//       res.json({ message: " User deleted", deletedUser: result });
//     } else {
//       res.status(404).json({ message: " User not found" });
//     }
//   } catch (err) {
//     console.error(" Error deleting user:", err.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// })


// app.put("/fullupdate/:id", async (req, res) => {
//   try {
//     const userid = req.params.id;
//     const updateddata = req.body; // <-- fixed

//     const result = await UserModel.findByIdAndUpdate(
//       userid,
//       { $set: updateddata },
//       { new: true }
//     );

//     if (result) {
//       res.json({ message: `${userid} is updated`, update: result });
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (err) {
//     console.log("Error in update:", err.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });



//in server.js only we cannot to mongoose
//in module we add our schema pattern
//controller grid operation
//router link module,ccontroller after router imported to server.js for all file format present like these
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const authroutes=require('./router/authrouter');
const app=express();
app.use(express.json());
app.use(cors());
app.use('/',authroutes);

const mangourl="mongodb://localhost:27017/dbmodel";
const port=5000;
mongoose.connect(mangourl).then(()=>{
  console.log("dbconnected");


app.listen(port,()=>{
  console.log("it connected to port");
});
});