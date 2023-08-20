import React from "react";

import QRCode from "./assets/QR Code.svg";
import Socket from "./assets/Socket.svg";
import StarRating from "./assets/Star Rings.svg";
import Button from "./atoms/Button/Button";
import TextField from "./atoms/TextField/TextField";
import ButtonHolder from "./modules/Layouts/ButtonLayout";
import TextHolder from "./modules/Layouts/TextLayout";
import SearchBox from "./atoms/SearchBox/SearchBox";
import List from "./atoms/List/List";
import ParentComponent from "./modules/PlanetCard/PlanetCard";
import MyComponent from "./modules/Layouts/PlantCardLayout";

// Sample data
const dataList = [
  { id: 1, title: "Vertika", text: "Tropical climate Nature-centric EcoTech Industries", img_url: "PlanetAqualis.svg" },
  { id: 2, title: "Aqualis", text: "Tropical climate Nature-centric EcoTech Industries", img_url: "PlanetEarth.svg" },
  { id: 3, title: "Titanis", text: "Tropical climate Nature-centric EcoTech Industries", img_url: "PlanetTitains.svg" },
];


export default function App() {
  // const text = 'Click Me';
  // const className = 'custom-button';
  return (
    <div>
      <ButtonHolder pb={7} pt={7}>
        <Button className={"custom-button"} icon={<img src={Socket} alt={""} />} />
        <Button className={"custom-button"} icon={<img src={QRCode} alt={""} />} />
        <Button className={"custom-button"} icon={<img src={StarRating} alt={""} />} />
      </ButtonHolder>
      <ButtonHolder pt={3}>
        <Button text={"Sign In"} className={"custom-button"} />
      </ButtonHolder>
      <TextHolder>
        <TextField type={"text"} placeholder={"Enter your email"} />
        <TextField type={"text"} placeholder={"Enter your email"} />
      </TextHolder>
      <SearchBox type={"text"} placeholder={"Enter your email"} />
      {/*<div className={"py-40"}>*/}
      {/*  <ParentComponent />*/}
      {/*</div>*/}


      <div className="container mx-auto p-4">
        <MyComponent dataList={dataList} />
      </div>

      <div className="">
        <div className="w-40 h-48 absolute">
          <div className="w-40 h-48 left-0 top-0 absolute bg-orange-400 rounded-2xl shadow" />
          <div className="Titanis w-28 h-8 left-[29px] top-[71px] absolute text-white text-3xl font-bold">Titanis</div>
          <div
            className="RedStoneMountainsResilientAndDaringMiningIndustries w-36 h-16 left-[8px] top-[107px] absolute text-white text-base font-normal leading-tight tracking-tight">Red
            Stone Mountains<br />Resilient and daring<br />Mining Industries
          </div>
          <div className="Planet00 w-28 h-28 left-[-15px] top-[-43px] absolute shadow" />
        </div>
      </div>

      sdds

    </div>
  );
}
