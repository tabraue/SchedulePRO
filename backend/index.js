require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");

const app = express();
const router = require("./api/routes/index");
const {dbConnect} = require('./db/db')

const run = async () => {
  try {
    app.use(cors());
    app.use(morgan("dev"));
    app.use(express.json());
    app.use('/api', router)
    await dbConnect();
    await app.listen(process.env.PORT, () => {
      console.log(">> Port listening");
    });
  } catch (error) {
    console.error(error);
    throw new Error(">> Connection error");
  }
};


run();
