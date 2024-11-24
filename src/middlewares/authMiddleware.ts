import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Example of a simple token check, can be expanded
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};