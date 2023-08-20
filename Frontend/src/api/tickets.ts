import {
    Ticket,
    getTicketsResponse,
    ticketFilterAttributes
} from "../types/ticketTypes";

const BASEURL = process.env.REACT_APP_BASE_URL

export async function filterTcikets(filterAttributes:ticketFilterAttributes) {
    try {
      let response;
      response = await fetch(BASEURL+"/api/tickets/filterTickets", {
        method: "POST",
        body: JSON.stringify({
            "startingPlanet": filterAttributes.startingPlanet,
            "departureDate": filterAttributes.departureDate,
            "destinationPlanet": filterAttributes.destinationPlanet,
            "packageId": filterAttributes.packageId
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = (await response.json()) as getTicketsResponse;
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      } else {
        return "An unexpected error occurred";
      }
    }
  }