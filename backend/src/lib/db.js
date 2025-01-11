import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Mongodb is connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Mongodb connection error: ${error}`);
  }
};
