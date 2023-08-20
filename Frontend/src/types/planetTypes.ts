export interface Planet {
  _id?: string;
  name: string;
  climate: string;
  attractions: string;
  culture: string;
  attractionsDescription: string;
  cultureDescription: string;
  planetImage: string;
  distanceFromPlanet: number;
  availablePackages: string[];
  reviewScore?: number;
  __v?: number;
}

export interface PlanetUpload {
  _id?: string;
  name: string;
  climate: string;
  attractions: string;
  culture: string;
  attractionsDescription: string;
  cultureDescription: string;
  planetImage: File;
  distanceFromPlanet: number;
  availablePackages: string[];
  reviewScore?: number;
  __v?: number;
}

export interface getPlanetsResponse {
  Error: boolean;
  Status: number;
  Message: string;
  Planets: Planet[];
}

export interface addPlanetsResponse {
  Error: boolean;
  Status: number;
  Message: string;
  Planets: Planet;
}
