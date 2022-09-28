/**
 * Router which inturn routes to specific routes
 */
import express from "express";

import createError from "http-errors";
import { getFood, getReservation } from "../controllers";
const router = express.Router();

router.get("/", (_, res) => {
  res.send("Api is running");
});

router.get("/food/:location", getFood);
router.get("/reservation-centres", getReservation);

router.use((_, res, next) => {
  next(createError(404));
});

export default router;
