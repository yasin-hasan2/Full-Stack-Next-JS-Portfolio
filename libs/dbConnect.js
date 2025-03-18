import mongoose from "mongoose";

let isConnected = false; // Database connection status

export const connect = async () => {
  mongoose.set("strictQuery", true); // Enable strict mode for queries

  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  if (!process.env.MONGODB_URI) {
    console.error("MongoDB URI is missing! Check your .env.local file.");
    return;
  }

  try {
    console.log("this is URI", process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "AlHasan-PortfolioDB", // Remove this line if you're using MongoDB < 4.0
      useNewUrlParser: true, // Remove this line if you're using MongoDB < 3.6
      useUnifiedTopology: true, // Remove this line if you're using MongoDB < 3.6
    });

    console.log("Connected to MongoDB ✅");
    isConnected = true; // Set isConnected to true after successful connection
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    setTimeout(connect, 5000); // Retry connection after 5s
  }
};

// console.log(mongoose.connection.db.databaseName);
