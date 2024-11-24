import express, { Request, Response } from "express";
import { fetch, create, update, deleteUser } from "../controller/userController";

const route = express.Router();

// Fetch users
route.get("/fetch", (req: Request, res: Response) => fetch(req, res));

// Create user
route.post("/create", (req: Request, res: Response) => create(req, res));

// Update user by ID
route.put("/update/:id", (req: Request, res: Response) => update(req, res));

// Delete user by ID
route.delete("/delete/:id", (req: Request, res: Response) => deleteUser(req, res));

export default route;
