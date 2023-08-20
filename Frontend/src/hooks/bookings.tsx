import {
    Booking,
    addBookingRequest,
    addBookingResponse,
    payForBookingRequest,
    payForBookingResponse,
    getBookingsOfUserRequest,
    getBookingsOfUserResponse
} from "../types/bookingTypes";

import { addBooking, getBookingsOfUser, payForBooking } from "../api/bookings";

export async function AddBooking(request:addBookingRequest) {
    try {
      const response = await addBooking(request);
      console.log("Response:", response);
    } catch (error) {
      console.error("An error occurred in adding booking:", error);
    }
  }

  export async function PayForBooking(request:payForBookingRequest) {
    try {
      const response = await payForBooking(request);
      console.log("Response:", response);
    } catch (error) {
      console.error("An error occurred in paying for booking:", error);
    }
  }

  export async function GettingBookingsOfUser(request:getBookingsOfUserRequest) {
    try {
      const response = await getBookingsOfUser(request);
      console.log("Response:", response);
    } catch (error) {
      console.error("An error occurred in getting bookings of user :", error);
    }
  }
