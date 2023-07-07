require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");

const app = express();
const client = require("./db/index");
const router = require("./api/routes/index");


const dbConnect = async () => {
  try {
    await client.connect({serverSelectionTimeoutMS: 5000})

    console.log(">> MongoDB connection established");
  } catch (error) {
    console.error(error);
    throw new Error(">> DB connection error");
  }
};

const run = async () => {
  try {
    app.use(cors());
    app.use(morgan("dev"));
    app.use(express.json());
    app.use('/api', router)
    await app.listen(process.env.PORT, () => {
      console.log(">> Port listening");
    });
    await dbConnect();
  } catch (error) {
    console.error(error);
    throw new Error(">> Connection error");
  }
};

run();
