import { getTicketsResponse,ticketFilterAttributes,Ticket } from "../types/ticketTypes";
import { filterTcikets} from "../api/tickets";

export async function FilterTickets(filterAttributes:ticketFilterAttributes) {
    try {
      const response = await filterTcikets(filterAttributes);
      console.log("Response:", response);
    } catch (error) {
      console.error("An error occurred in filtering tickets:", error);
    }
  }