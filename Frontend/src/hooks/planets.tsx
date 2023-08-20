import { addPlanet, getPlanets, getPopularPlanets } from "../api/planets";
import { Planet, PlanetUpload } from "../types/planetTypes";

export async function GetPlanets() {
  try {
    const response = await getPlanets();
    console.log("Response:", response);
  } catch (error) {
    console.error("An error occurred in retrieving planets:", error);
  }
}

export async function GetPopularPlanets() {
  try {
    const response = await getPopularPlanets();
    console.log("Response:", response);
  } catch (error) {
    console.error("An error occurred in retrieving planets:", error);
  }
}

export async function AddPlanet(planet: PlanetUpload) {
  try {
    const response = await addPlanet(planet);
    console.log("Response:", response);
  } catch (error) {
    console.error("An error occurred in retrieving planets:", error);
  }
}
