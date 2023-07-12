
export type UserType = {
  email: string 
  id: string;
  token: string,
  name:string | null
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
  token: string
  id: string,
  name:string | null
};