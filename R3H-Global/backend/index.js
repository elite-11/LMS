import express from "express";
import { connectDB } from "./db/dbConnection.js";
import "dotenv/config";
import cors from "cors";
import { Router } from "./router/routes.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Router);

connectDB();

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
