import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Enable CORS to allow requests from the frontend
app.use(cors());

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Root&Reach",
  })
  .then(() => {
    console.log("Connected to MongoDB using Mongoose");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define Mongoose Schema and Model for User
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

// Specify the collection name explicitly
const User = mongoose.model("User", userSchema, "users"); // Replace "specificCollectionName" with your desired collection name

// Store the username in MongoDB
app.post("/store-username", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    console.error("No name provided in the request body");
    return res.status(400).json({ message: "Name is required" });
  }

  const newUser = new User({ name });

  try {
    await newUser.save(); // Save the user to the database
    console.log("User saved successfully:", newUser);
    res.status(201).json({ message: "Username stored successfully", data: newUser });
  } catch (error) {
    console.error("Error saving user to the database:", error);
    res.status(500).json({ message: "Error storing username", error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
