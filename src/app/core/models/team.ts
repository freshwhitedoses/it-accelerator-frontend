import {User} from "./user";

export interface Team {
  teamId: string,
  name: string,
  users: User[]
}
export interface TeamModel {
  teamId: string,
}
export interface TeamsModel {
  teams: Team[],
}
export interface TeamRequest {
  userNames: string[],
  name: string
}
export interface TeamFeedback {
  status: number,
  investingStartupId: string
}
