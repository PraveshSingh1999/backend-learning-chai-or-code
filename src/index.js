// require("dotenv").config({path: "./env"})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });




connectDB();
































/*

import express from "express";
const app = express;

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error while connecting");
      throw error;
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server is listening on ${process.env.PORT} Port`)
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();

// function connectDB() {}
// connectDB();

*/
