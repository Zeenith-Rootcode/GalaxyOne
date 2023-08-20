export interface Ticket {
    _id?: string;
    package: string;
    packageName: string;
    startingPlanet: string;
    startingPlanetName: string;
    destinationPlanet: string;
    destinationPlanetName: string;
    departureDate: string;
    arrivalDate: string;
    availableNumberOdTickets: number;
    journeyDistance: number;
    price?: number;
    __v?: number;
  }
  
  export interface getTicketsResponse {
    Error: boolean;
    Status: number;
    Message: string;
    Planets: Ticket[];
  }
  

  export interface ticketFilterAttributes{
    startingPlanet: string,
    departureDate?: string,
    destinationPlanet?: string,
    packageId?: string
  }
  
  