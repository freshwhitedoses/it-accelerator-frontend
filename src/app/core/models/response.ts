import {User} from "./user";
import {InvestingStartup, Startup} from "./startup";
import {TeamModel, TeamsModel} from "./team";

export interface Response {
  data: any,
  status: boolean,
  massage: string
}
export interface Token {
  accessToken: string,
}
export class SignupResponse implements Response{
  data: Token;
  massage: string;
  status: boolean;
}
export class UserResponse implements Response{
  data: User;
  massage: string;
  status: boolean;
}
export class StartupResponse implements Response{
  data: Startup;
  massage: string;
  status: boolean;
}
export class StartupsResponse implements Response{
  data: Startup[];
  massage: string;
  status: boolean;
}
export class InvestingStartupResponse implements Response{
  data: InvestingStartup;
  massage: string;
  status: boolean;
}
export class InvestingStartupsResponse implements Response{
  data: InvestingStartup[];
  massage: string;
  status: boolean;
}
export class TeamResponse implements Response{
  data: TeamModel;
  massage: string;
  status: boolean;
}
export class TeamsResponse implements Response{
  data: TeamsModel;
  massage: string;
  status: boolean;
}
export interface CodeDto {
  email: string
}
