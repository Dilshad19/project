import mongoose, { Document, Schema } from "mongoose";

// Define the User interface extending mongoose Document
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Define the user schema
const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Optional: Adds createdAt and updatedAt fields
  }
);

// Create and export the User model
const User = mongoose.model<IUser>("User", userSchema);

export default User;
