import { userLogin, userRegister, userResponse } from "../types/userTypes";


const BASEURL = process.env.REACT_APP_BASE_URL
export async function registerUser(user: userRegister) {
  try {
    let response;
    if (user.loginType === "NORMAL") {
      response = await fetch(BASEURL+"/api/users/registerUser", {
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
          "Accept": "application/json",
        },
      });
    } else {
      response = await fetch(BASEURL+"/api/users/registerUser", {
        method: "POST",
        body: JSON.stringify({
          fullName: user.fullName,
          loginType: user.loginType,
          universalId: user.universalId,
          googleId: user.googleId,
          universalTel: user.universalTel,
          homePlanet: user.homePlanet,
          homeDestrict: user.homeDestrict,
          race: user.race,
        }),
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
    }

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = (await response.json()) as userResponse;
    return result;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
}

export async function loginUser(user: userLogin) {
  try {
    let response;
    if (user.loginType === "NORMAL") {
      response = await fetch(BASEURL+"api/users/loginUser", {
        method: "POST",
        body: JSON.stringify({
          loginType: user.loginType,
          universalId: user.universalId,
          password: user.password,
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
    } else {
      response = await fetch(BASEURL+"/api/users/loginUser", {
        method: "POST",
        body: JSON.stringify({
          loginType: user.loginType,
          googleId: user.googleId,
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
    }

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = (await response.json()) as userResponse;
    return result;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "An unexpected error occurred";
    }
  }
}
