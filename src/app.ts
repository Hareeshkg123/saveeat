/**
 * Starts the  api services
 */

import express from "express";
import router from "./routes";
import cors from "cors";
const mongoose = require("./utils/db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(router);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
