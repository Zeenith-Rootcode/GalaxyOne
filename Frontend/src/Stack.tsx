import React from "react";
import "./Stack.css"; // Import your CSS file for styling
import { LoginUser, RegisterUser } from "./hooks/user";
import { loginType, userLogin, userRegister } from "./types";

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

const handleUserLogin = (user: userLogin) => {
  LoginUser(user);
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
