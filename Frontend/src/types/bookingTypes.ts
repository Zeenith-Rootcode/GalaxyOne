import { user } from "./userTypes";

export interface Booking {
    _id?: string;
    user: string;
    ticket: string;
    issuedDate: string;
    destination: string;
    startingPlanet: string;
    departureDate: string;
    status: bookingStatus;
    numberOdTickets: number;
    price?: number;
    __v?: number;
  }


  export enum bookingStatus {
    PAID = "PAID",
    NOT_PAID= "NOT PAID",
  }

  export interface Payment {
    _id?: string;
    user: string;
    booking: string;
    paymentDate: string;
    price?: number;
    __v?: number;
  }

  export interface addBookingResponse {
    Error: boolean;
    Status: number;
    Message: string;
    Booking: Booking;
  }

  export interface payForBookingResponse {
    Error: boolean;
    Status: number;
    Message: string;
    Booking: Booking;
    Payment: Payment
  }

  export interface getBookingsOfUserResponse {
    Error: boolean;
    Status: number;
    Message: string;
    Booking: Booking;
    User:user,
    Bookings:Booking[]
  }
  

  export interface addBookingRequest{
    user:string,
    ticket:string,
    numberOfTickets:number
  }

  export interface payForBookingRequest{
    user:string,
    booking:string,
    cardNumber:string,
    nameOnCard:string,
    cvc:string,
    expDate:string
  }

  export interface getBookingsOfUserRequest{
    user:string
  }
  
  