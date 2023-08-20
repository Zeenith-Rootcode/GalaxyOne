import {
  Planet,
  PlanetUpload,
  addPlanetsResponse,
  getPlanetsResponse,
} from "../types/planetTypes";

const BASEURL = process.env.REACT_APP_BASE_URL

export async function getPlanets() {
  try {
    const response = await fetch(BASEURL+"/api/planets/getPlanetsDetails", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = (await response.json()) as getPlanetsResponse;

    return result;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
}

export async function getPopularPlanets() {
  try {
    const response = await fetch(BASEURL+"/api/planets/getPopularPlanets", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = (await response.json()) as getPlanetsResponse;

    return result;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
}

export async function getRecentPlanets(userId: string) {
  try {
    let response;
    response = await fetch(BASEURL+"/api/bookings/getRecentPlanetsOfUser", {
      method: "POST",
      body: JSON.stringify({
        "user":"64defd1207759034c8a976f3"
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = (await response.json()) as getPlanetsResponse;
    return result;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
}


export async function addPlanet(planet: PlanetUpload) {
  try {
    const formData = new FormData();
    formData.append("name", planet.name);
    formData.append("climate", planet.climate);
    formData.append("attractions", planet.attractions);
    formData.append("culture", planet.culture);
    formData.append("attractionsDescription", planet.attractionsDescription);
    formData.append("cultureDescription", planet.cultureDescription);
    formData.append("planetImage", planet.planetImage);
    formData.append("distanceFromPlanet", planet.distanceFromPlanet.toString());
    for (let i = 0; i < planet.availablePackages.length; i++) {
      formData.append("availablePackages", planet.availablePackages[i]);
    }

    const response = await fetch(BASEURL+"/api/planets/addPlanet", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data; boundary=${formData._boundary}",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = (await response.json()) as addPlanetsResponse;
    return result;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
}
