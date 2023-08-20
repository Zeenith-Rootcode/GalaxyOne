export interface userRegister {
  fullName: string;
  loginType: string;
  universalId: string;
  universalTel: string;
  homePlanet: string;
  homeDestrict: string;
  race: string;
  password?: string;
  googleId?: string;
}

export interface user {
  fullName: string;
  loginType: string;
  universalId: string;
  universalTel: string;
  homePlanet: string;
  homeDestrict: string;
  race: string;
  _id: string;
  __v: number;
  googleId?: string;
  password?: string;
}

export interface userResponse {
  Error: string;
  Status: string;
  Message: string;
  User?: user;
}

export enum loginType {
  NORMAL = "NORMAL",
  GOOGLE = "GOOGLE",
}

export interface userLogin {
  googleId?: string;
  loginType: loginType;
  universalId?: string;
  password?: string;
}
