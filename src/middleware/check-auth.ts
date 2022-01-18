import jwt from 'jsonwebtoken';


export const checkAuth = (request: any, response: any, next: any) => {
  try {
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
