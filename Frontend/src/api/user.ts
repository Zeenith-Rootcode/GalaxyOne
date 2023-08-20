import { userRegister, userRegisterResponse } from "../types";

export async function registerNormalUser(user: userRegister) {
  try {
    const response = await fetch("/api/users/registerUser", {
      method: "POST",
      body: JSON.stringify({
        fullName: user.fullName,
        loginType: user.loginType,
        universalId: user.universalId,
        universalTel: user.universalTel,
        homePlanet: user.homePlanet,
        homeDestrict: user.homeDestrict,
        race: user.race,
        password: user.password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = (await response.json()) as userRegisterResponse;
    return result;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
}
