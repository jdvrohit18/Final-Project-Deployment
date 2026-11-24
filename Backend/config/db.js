const mongoose = require("mongoose");
async function connectDB() {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is missing. Configure Backend/.env");
    process.exit(1);
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
}
module.exports = connectDB;
