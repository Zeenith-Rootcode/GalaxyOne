import { registerNormalUser } from "../api/user";
import { userRegister } from "../types";

export async function RegisterNormalUser(user: userRegister) {
  try {
    const response = await registerNormalUser(user);
    console.log("Response:", response);
  } catch (error) {
    console.error("An error occurred in registering user Google:", error);
  }
}
