/**
 * Schema for reservation center
 */
import { Schema, model } from "mongoose";

const ReservationCenterSchema: Schema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  rating: {
    type: String,
  },
  price: {
    type: Number,
  },
  discountPercentage: {
    type: Number,
  },
  location: {
    type: String,
  },
});

export default model("ReservationCenter", ReservationCenterSchema);
