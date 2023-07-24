import "dotenv/config";

import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
const mongostring = process.env.DATABASE_URL;

mongoose.connect(mongostring);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log("Database is not Connected");
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(routes);
app.use(express.json);

app.listen(process.env.port || 3000, () => {
  console.log(`Server Started at ${process.env.PORT || 3000}`);
});
