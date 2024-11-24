import { Request, Response } from 'express';
import Mobile from '../model/mobile';

export const getAllMobiles = async (req: Request, res: Response) => {
  try {
    const mobiles = await Mobile.find();
    res.status(200).json(mobiles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mobiles', error });
  }
};

export const createMobile = async (req: Request, res: Response) => {
  const { brand, model, price } = req.body;
  try {
    const newMobile = new Mobile({ brand, model, price });
    await newMobile.save();
    res.status(201).json({ message: 'Mobile created successfully', newMobile });
  } catch (error) {
    res.status(500).json({ message: 'Error creating mobile', error });
  }
};
