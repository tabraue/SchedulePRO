const mongoose = require('mongoose')

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.URI, {dbName: process.env.DB_NAME})
    console.log(">> MongoDB connection established");
  } catch (error) {
    console.error(error);
    throw new Error(">> DB connection error");
  }
};


module.exports = {dbConnect}