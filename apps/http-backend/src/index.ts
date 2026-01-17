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
     // ...existing code...
     try{
        const user=await prisma.user.create({
         data:{
                 email:parsedData.data.email,
                 password:parsedData.data.password,
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



app.post("/signin", (req, res) => {
    const data=SigninSchema.safeParse(req.body);
     if(!data.success){
          res.json({
               message:"Incorrect data",
          })
          return;
     }
    const userId=1;
    const token=jwt.sign({userId},JWT_SECRET);

    res.json({token});
});



app.post("/room",middleware,(req, res) => {
     const data=CreateRoomSchema.safeParse(req.body);
     if(!data.success){
          res.json({
               message:"Incorrect data",
          })
          return;
     }
     res.json({
        roomId: "room-123",
     })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});