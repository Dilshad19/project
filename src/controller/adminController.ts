import { Request, Response } from 'express';
import Admin from '../model/admin';

export const createAdmin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin created successfully', newAdmin });
  } catch (error) {
    res.status(500).json({ message: 'Error creating admin', error });
  }
};
