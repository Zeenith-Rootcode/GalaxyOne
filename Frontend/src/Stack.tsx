import React from "react";
import "./Stack.css"; // Import your CSS file for styling
import { RegisterNormalUser } from "./hooks/user";
import { loginType } from "./types";

const handleNormalUserRegister = () => {
  RegisterNormalUser({
    fullName: "Chanuka Abeysinghe",
    loginType: loginType.NORMAL,
    universalId: "100012V",
    universalTel: "343432143124",
    homePlanet: "Mars",
    homeDestrict: "Venace234",
    race: "Alient",
    password: "1234",
  });
};

const Stack: React.FC = () => {
  return (
    <div className="stack-container">
      <div className="background-image"></div>
      <div className="component-stack">
        <div className="component" style={{ margin: "20px" }}>
          <h2>Contact Us</h2>
          {/*dont wrap api call button with a form element*/}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={handleNormalUserRegister}
          >
            RegisterNormalUser
          </button>
        </div>
        <div className="component" style={{ margin: "20px" }}>
          <h2>About Us</h2>
          <p>Lorem text</p>
        </div>
        <div className="component" style={{ margin: "20px" }}>
          <h2>Services</h2>
          <ul>
            <li>element 1</li>
            <li>element 2</li>
            <li>element 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stack;
