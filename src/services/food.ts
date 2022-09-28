/**
 * Methods for popular food and reservation center APIs
 */

import FoodModel from "../model/foodSchema";
import ReservationCenterModel from "../model/reservationCenterSchema";
import { FoodType, ReservationCenterType } from "./types";

//function to get the popular food based on location
export async function getPopularFood(location: string) {
  const food = await FoodModel.find({
    location: location.toLowerCase(),
  });

  const finalFood: Array<FoodType & { actualPrice: number }> = [];

  food.forEach((item: FoodType) => {
    finalFood.push({
      name: item.name,
      location: item.location,
      price: item.price,
      discountPercentage: item.discountPercentage,
      rating: item.rating,
      description: item.description,
      actualPrice: item.price! - (item.price! / 100) * item.discountPercentage!,
    });
  });
  if (!food) {
    throw new Error("Food not found");
  }
  return finalFood;
}

//function to get the reservation center
export async function getReservationCentres() {
  const reservation = await ReservationCenterModel.find();
  const finalReservation: Array<
    ReservationCenterType & { actualPrice: number }
  > = [];

  reservation.forEach((item) => {
    finalReservation.push({
      name: item.name,
      price: item.price,
      location: item.location,
      discountPercentage: item.discountPercentage,
      rating: item.rating,
      description: item.description,
      actualPrice: item.price! - (item.price! / 100) * item.discountPercentage!,
    });
  });
  if (!finalReservation) {
    throw new Error("Reservation centre not found");
  }
  return finalReservation;
}
