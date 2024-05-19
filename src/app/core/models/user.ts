
export interface RegisterUser{
  name: string,
  surname : string,
  telegramId : string,
  password : string,
  email : string,
  role: number,
  code: number,
  birthDate: string;
}
export interface LoginUser{
  email: string,
  password: string,
  code: number,
}
export interface LoginRequest {
  "isSuccess": true,
  "message": string,
  "token": string,
  "expiresIn": number,
  "user": {
    "username": string,
    "password": string,
    "enabled": boolean,
    "authorities": [
      {
        "authority": string
      }
    ],
    "accountNonExpired": boolean,
    "accountNonLocked": boolean,
    "credentialsNonExpired": boolean
  }
}

export interface User {
  username: string,
  name: string,
  surname: string,
  telegramId: string,
  email: string,
  role: string | number,
  birthDate: string,
  userId?: string,
  password?: string,
}
