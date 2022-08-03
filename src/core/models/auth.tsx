export interface UserResponseData {
  username:string,
  password:string,
  token: string;
}
export interface UserInfo {
  username: string;
  password: string;
}
export interface UserResponse {
  data: UserResponseData;
  code: number;
  success: boolean;
  message: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthState{
  userInfo:UserInfo|null;
  token:string|null
}

export const initialAuthState:AuthState={
  userInfo:null,
  token: null
}
