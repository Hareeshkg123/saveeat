import { Request, Response, NextFunction } from "express";
import { getPopularFood, getReservationCentres } from "../services/food";

// add course
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
