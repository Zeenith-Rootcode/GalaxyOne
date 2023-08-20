import {
    Booking,
    addBookingRequest,
    addBookingResponse,
    payForBookingRequest,
    payForBookingResponse,
    getBookingsOfUserRequest,
    getBookingsOfUserResponse
} from "../types/bookingTypes";

const BASEURL = process.env.REACT_APP_BASE_URL

export async function addBooking(request:addBookingRequest) {
    try {
      let response;
      response = await fetch(BASEURL+"/api/bookings/addBooking", {
        method: "POST",
        body: JSON.stringify({
            "user": request.user,
            "ticket": request.ticket,
            "numberOfTickets": request.numberOfTickets,
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = (await response.json()) as addBookingResponse;
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      } else {
        return "An unexpected error occurred";
      }
    }
  }

  export async function payForBooking(request:payForBookingRequest) {
    try {
      let response;
      response = await fetch(BASEURL+"/api/bookings/payForBooking", {
        method: "POST",
        body: JSON.stringify({
            "user": request.user,
            "booking": request.booking,
            "cardNumber":request.cardNumber,
            "nameOnCard":request.nameOnCard,
            "cvc":request.cvc,
            "expDate": request.expDate,
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = (await response.json()) as payForBookingResponse;
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      } else {
        return "An unexpected error occurred";
      }
    }
  }

  export async function getBookingsOfUser(request:getBookingsOfUserRequest) {
    try {
      let response;
      response = await fetch(BASEURL+"/api/bookings/getBookingsOfUser", {
        method: "POST",
        body: JSON.stringify({
            "user": request.user
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = (await response.json()) as getBookingsOfUserResponse;
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      } else {
        return "An unexpected error occurred";
      }
    }
  }