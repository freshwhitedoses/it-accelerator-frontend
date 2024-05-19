import {User} from "./user";

export interface Startup {
  startupId: string,
  teamId: string,
  analystId: string,
  name: string,
  target: string,
  description: string,
  investmentAmount: string,
  status: number,
  analystComment: string,
  investmentType: number,
  mainInStartup: number,
  mainInMe: number,
  filesLink: string,
  maturityStage: number,
}
export interface StartupRequest {
  teamId: string,
  name: string,
  target: string,
  description: string,
  investmentAmount: string,
  investmentType: number,
  mainInStartup: number,
  mainInMe: number,
  filesLink: string,
  maturityStage: number,
}
export interface InvestingStartup {
  investingStartupId: string,
  startup: Startup,
  investor: User,
  teamStatus: number,
  investorStatus: number,
}
export interface AnalystFeedback {
  status: number,
  analystComment: string,
  startupId: string
}
export interface InvestorFeedback {
  status: number,
  startupId: string
}
export interface StartupFilters {
  mainInStartup: number,
  mainInMe: string,
  maturityStage: string
}
