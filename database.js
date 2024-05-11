import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://obasio1115:obasio1115@cluster0.quvuxzd.mongodb.net/frog?retryWrites=true&w=majority&appName=Cluster0', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log(`MongoDB connected successfully:${conn.connection.host}`);
  } catch (error) {
    console.error(`Error while connecting${error.message}`)
    process.exit(1);
  }
}

export default connectDB;
