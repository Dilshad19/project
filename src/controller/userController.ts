import { Request, Response } from "express";
import User from "../model/userModel"; // Adjust the import path based on your project structure

export const fetch = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData = new User(req.body);
    const { email } = userData;
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    const savedUser = await userData.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    await User.findByIdAndDelete(id);
    res.status(201).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
