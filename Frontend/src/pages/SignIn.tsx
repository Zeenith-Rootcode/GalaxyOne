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
      <div className="pt-36" />
      <TextHolder>
        <TextField type={"text"} placeholder={"Universal ID"} />
        <TextField type={"text"} placeholder={"Password"} />
      </TextHolder>
      <ButtonHolder pb={7} pt={7}>
        <Button className={"custom-button"} icon={<img src={Socket} alt={""} />}  text={""}/>
        <Button className={"custom-button"} icon={<img src={QRCode} alt={""} />}  text={""}/>
        <Button className={"custom-button"} icon={<img src={StarRating} alt={""} />}  text={""}/>
      </ButtonHolder>
      <ButtonHolder pt={3}>
        <Button text={"Sign In"} className={"custom-button"} />
      </ButtonHolder>
      <ButtonHolder>
        <div
          className="flex h-16 w-full items-center justify-center gap-2.5 px-5  text-center text-xl font-extrabold  tracking-tight text-black ">
          Register
        </div>
      </ButtonHolder>

    </div>
  );
}
