import { loginUser, registerUser } from "../api/user";
import { userLogin, userRegister } from "../types";

export async function RegisterUser(user: userRegister) {
  try {
    const response = await registerUser(user);
    console.log("Response:", response);
  } catch (error) {
    console.error("An error occurred in registering normal user:", error);
  }
}

export async function LoginUser(user: userLogin) {
  try {
    const response = await loginUser(user);
    console.log("Response:", response);
  } catch (error) {
    console.error("An error occurred in registering Google user:", error);
  }
}
