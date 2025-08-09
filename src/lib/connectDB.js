import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export default async function connectDB() {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("✅ Already connected to MongoDB");
      return;
    }

    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}