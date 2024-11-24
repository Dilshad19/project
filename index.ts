import express, { Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./src/routes/userRoutes"; // Ensure correct extension, .ts if required

dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT: number = parseInt(process.env.PORT || '3000');
const MONGOURL: string = process.env.MONGO_URL as string;

mongoose.connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    });
  })
  .catch((error: Error) => console.log(error));

app.use("/api/user", route);
