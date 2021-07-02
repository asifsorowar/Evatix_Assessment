import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) return;

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected......"))
    .catch(() => console.log("MongoDB not connected!!!!"));

  connection.isConnected = true;
}

export default dbConnect;
