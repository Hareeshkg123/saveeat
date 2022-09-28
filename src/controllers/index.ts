/**
 * Controller for popular food and reservation center APIs
 */

import { Request, Response, NextFunction } from "express";
import { getPopularFood, getReservationCentres } from "../services/food";

//get popular food
export const getFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const food = await getPopularFood(req.params.location);
    res.json({
      message: "success",
      food,
    });
  } catch (error) {
    next(error);
  }
};

// get reservation center
export const getReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reservation = await getReservationCentres();
    res.json({
      message: "success",
      reservation,
    });
  } catch (error) {
    next(error);
  }
};
