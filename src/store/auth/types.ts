

export type UserType = {
  email: string 
  id: string;
  // accessToken: string
};

export type LoginActionType = {
  type: string;
  payload: UserType;
};

export type LogoutActionType = {
  type: string;
};

export type LoginStateType = {
  email: string;
  // accessToken: string
  id: string;
};