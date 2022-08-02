export interface UserResponseData {
  username:string,
  password:string,
  token: string;
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
  userInfo?:{
    username: string;
    password: string;
  }
  token?:string
}

export const initialAuthState:AuthState={
  token: undefined, userInfo: undefined
}
