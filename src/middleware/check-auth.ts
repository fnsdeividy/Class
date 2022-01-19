import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const checkAuth = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    if (!request.headers.authorization) {
      return response.status(401).json({
        message: 'Authenticate failed',
      });
    }

    jwt.verify(
      request.headers.authorization.split(' ')[1],
      '1gef20ce0cad89a33gjkltyb35t1t4ns'
    );
    next();
  } catch (error) {
    return response.status(401).json({
      message: 'Authenticate failed',
    });
  }
};
