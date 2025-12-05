import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'; 
import HttpException from '../../../shared/errors/htttp-exceptions';

export interface AuthRequest extends Request {
  user?: { 
    userId: string; 
    email: string 
  };
}

export const authMiddleware = (
    req : AuthRequest,
    res : Response,
    next : NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader){
        return next(new HttpException(401, 'No Token Provided'));
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET || "defaultsecret"
        ) as { userId: string; email: string };
        
        req.user = decoded;
        next();
    } catch (error) {
        return next(new HttpException(401, 'Invalid Token'));
    }
}