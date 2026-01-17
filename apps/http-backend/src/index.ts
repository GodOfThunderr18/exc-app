const fs = require('fs');
const path = require('path');
const envPath = path.resolve(process.cwd(), '../../.env');
console.log('Current working directory:', process.cwd());
console.log('Looking for .env at:', envPath);
console.log('.env exists:', fs.existsSync(envPath));
require('dotenv').config({ path: envPath });
import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common";
import { middleware } from "./middleware";
import {CreateUserSchema,SigninSchema,CreateRoomSchema} from "@repo/common/types";
import bcrypt from "bcrypt";
const { prisma } = require("@repo/db");
const app = express();
const PORT = 3001;
app.use(express.json());



app.post("/signup", async (req, res) => {
     const parsedData=CreateUserSchema.safeParse(req.body);
     if(!parsedData.success){
          res.json({
               message:"Incorrect data",
          })
          return;
     }
     try{
        const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);
        const user=await prisma.user.create({
         data:{
                 email:parsedData.data.email,
                 password:hashedPassword,
                name:parsedData.data.name,
         }
     }) 

     res.json({userId:user.id})
     }catch(e){
          console.log("Database error:", e);
          res.json({
               message:"User already exists",
          })
     }
});



app.post("/signin", async(req, res) => {
    const parsedData=SigninSchema.safeParse(req.body);
     if(!parsedData.success){
          res.json({
               message:"Incorrect data",
          })
          return;
     }
     
     try {
        // Find user by email only (not password)
        const user=await prisma.user.findFirst({
           where:{
               email:parsedData.data.email,  
           }
        });

        // Check if user exists
        if (!user) {
            res.json({
                message: "Invalid credentials",
            });
            return;
        }

        // Compare plain text password with hashed password
        const isPasswordValid = await bcrypt.compare(parsedData.data.password, user.password);
        
        if (!isPasswordValid) {
            res.json({
                message: "Invalid credentials",
            });
            return;
        }

        // Generate JWT token with actual user ID
        const token=jwt.sign({userId: user.id}, JWT_SECRET);

        res.json({token});
        
     } catch (e) {
        console.log("Database error:", e);
        res.json({
            message: "Authentication failed",
        });
     }
});


app.post("/room",middleware,async (req, res) => {
     const parsedData=CreateRoomSchema.safeParse(req.body);
     if(!parsedData.success){
          res.json({
               message:"Incorrect data",
          })
          return;
     }
     const userId=req.userId;
     try{
          const room=await prisma.room.create({
        data:{
            slug:parsedData.data.name,
            adminId:userId,
        }
     });
     res.json({
        roomId: room.id,
     })
     }catch(e){
          console.log("Database error:", e);
          res.json({
               message:"Could not create room",
          })
     }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});