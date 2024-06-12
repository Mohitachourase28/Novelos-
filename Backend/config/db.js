import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {           
  try {
    const mongoURI = process.env.MongoDBURL;
    if (!mongoURI) {
      throw new Error('MONGO_URI is not defined');
    }

    await mongoose.connect(mongoURI)
    
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
