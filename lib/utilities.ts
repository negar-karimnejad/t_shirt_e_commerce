import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL ?? "default_database_url");
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error:any) {
    console.error(`ERROR: ${error.message}`);
  }
};

export default connectDB;
