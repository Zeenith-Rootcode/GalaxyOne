import React from "react";
import "./Stack.css"; // Import your CSS file for styling
import { LoginUser, RegisterUser } from "./hooks/user";
import { loginType, userLogin, userRegister } from "./types/userTypes";
import { AddPlanet, GetPlanets, GetPopularPlanets, GetRecentPlanets } from "./hooks/planets";
import { Planet, PlanetUpload } from "./types/planetTypes";
import {FilterTickets} from "./hooks/tickets";
import {ticketFilterAttributes, Ticket} from "./types/ticketTypes";

let testNormalRegister: userRegister = {
  fullName: "Chanuka Abeysinghe",
  loginType: loginType.NORMAL,
  universalId: "100012V",
  universalTel: "343432143124",
  homePlanet: "Mars",
  homeDestrict: "Venace234",
  race: "Alient",
  password: "1234",
};

let testGoogleRegister: userRegister = {
  fullName: "Chanuka Abeysinghe",
  loginType: loginType.GOOGLE,
  universalId: "100012V",
  googleId: "34324123",
  universalTel: "343432143124",
  homePlanet: "Mars",
  homeDestrict: "Venace234",
  race: "Alient",
};


const handleUserRegister = (user: userRegister) => {
  RegisterUser(user);
};

let testNormalLogin: userLogin = {
  loginType: loginType.NORMAL,
  universalId: "100012V",
  password: "1234",
};

let testGoogleLogin: userLogin = {
  loginType: loginType.GOOGLE,
  googleId: "34324123",
};

let testGetRecentPlanets:string = "64defd1207759034c8a976f3"

const handleUserLogin = (user: userLogin) => {
  LoginUser(user);
};

const imageServerURL =
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg";

let testAddPlanet: Planet = {
  name: "Earth",
  climate: "Varied, from arid deserts to icy tundras.",
  attractions: "Unity Plaza, Global Cultural Bazaar, Eclipsar Mountain Range.",
  culture: "Diverse and multicultural, celebrating unity in diversity.",
  attractionsDescription:
    "Unity Plaza, Global Cultural Bazaar, Eclipsar Mountain Range.",
  cultureDescription:
    "Diverse and multicultural, celebrating unity in diversity.",
  planetImage: imageServerURL,
  distanceFromPlanet: 3333,
  availablePackages: ["64df481d5e82dcf68fdfaed3", "64df481d5e82dcf68fdfaed4"],
};

const handleGetPlanets = () => {
  GetPlanets();
};

const handleGetPopularPlanets = () => {
  GetPopularPlanets();
};

const handleGetRecentPlanets = (userId:string) => {
  GetRecentPlanets(userId);
};

const handleAddPlanet = async (planet: Planet) => {
  try {
    const blob = await fetch(planet.planetImage).then((response) =>
      response.blob()
    );
    const planetImageFile = new File([blob], "planetImage.jpg");

    const testAddPlanet: PlanetUpload = {
      name: planet.name,
      climate: planet.climate,
      attractions: planet.attractions,
      culture: planet.culture,
      attractionsDescription: planet.attractionsDescription,
      cultureDescription: planet.cultureDescription,
      planetImage: planetImageFile,
      distanceFromPlanet: planet.distanceFromPlanet,
      availablePackages: planet.availablePackages,
    };

    AddPlanet(testAddPlanet);
  } catch (error) {
    console.error("Error creating and using the image file:", error);
  }
};

let testFilterTickets: ticketFilterAttributes = {
  startingPlanet: "64e06242583bb603ee4baf81",
  departureDate: "2023/10/11",
  destinationPlanet: "64e06238583bb603ee4baf80",
  packageId:"64df481d5e82dcf68fdfaed3"
};

const handleFilterTickets = (filterAttributes:ticketFilterAttributes) => {
  FilterTickets(filterAttributes);
};


const Stack: React.FC = () => {
  return (
    <div className="stack-container">
      <div className="background-image"></div>
      <div className="component-stack">
        <div className="component" style={{ margin: "20px" }}>
          <h2>User</h2>
          {/*dont wrap api call button with a form element*/}
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => handleUserRegister(testNormalRegister)}
          >
            RegisterNormalUser
          </button>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => handleUserRegister(testGoogleRegister)}
          >
            RegisterGoogleUser
          </button>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => handleUserLogin(testNormalLogin)}
          >
            Login Normal User
          </button>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => handleUserLogin(testGoogleLogin)}
          >
            Login Google User
          </button>
        </div>
        <div className="component" style={{ margin: "20px" }}>
          <h2>Planets</h2>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => handleGetPlanets()}
          >
            Get Planets
          </button>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => handleGetPopularPlanets()}
          >
            Get Popular Planets
          </button>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => handleGetRecentPlanets(testGetRecentPlanets)}
          >
            Get Recent Planets
          </button>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => handleAddPlanet(testAddPlanet)}
          >
            Add Planet
          </button>
        </div>

        <div className="component" style={{ margin: "20px" }}>
          <h2>Tickets</h2>
          {/*dont wrap api call button with a form element*/}
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => handleFilterTickets(testFilterTickets)}
          >
            Filter Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stack;
