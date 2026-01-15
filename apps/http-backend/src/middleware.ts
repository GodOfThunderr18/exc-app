
import {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}
export function middleware(req:Request,res:Response,next:NextFunction){
    const token=req.headers['authorization'] ?? "";

    const decoded=jwt.verify(token,JWT_SECRET);

    if(decoded && typeof decoded === 'object' && 'userId' in decoded){
       req.userId=decoded.userId as string;
       next();
    }else{
        res.status(401).json({message:"Unauthorized"}); 
    }
}