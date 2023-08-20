import React from "react";

import QRCode from "./assets/QR Code.svg";
import Socket from "./assets/Socket.svg";
import StarRating from "./assets/Star Rings.svg";
import Button from "../atoms/Button/Button";
import TextField from "../atoms/TextField/TextField";
import ButtonHolder from "../modules/Layouts/ButtonLayout";
import TextHolder from "../modules/Layouts/TextLayout";


export default function App() {
  return (
    <div>
      <TextHolder>
        <div className="text-shadow text-center font-bold text-black text-5xl">
          Sign In
        </div>
        <div className="text-shadow text-center font-bold text-black text-l pt-3">
          Your Portal to the Universe
        </div>
      </TextHolder>
      <TextHolder>
        <TextField type={"text"} placeholder={"Name"} />
        <TextField type={"text"} placeholder={"Universal ID"} />
        <TextField type={"text"} placeholder={"Universal Tele"} />
        <TextField type={"text"} placeholder={"Home Planet"} />
        <TextField type={"text"} placeholder={"Home District"} />
        <TextField type={"text"} placeholder={"Race"} />
        <TextField type={"text"} placeholder={"Password"} />
      </TextHolder>
      <ButtonHolder pt={3}>
        <Button text={"Sign Up"} className={"custom-button"} />
      </ButtonHolder>
    </div>
  );
}
