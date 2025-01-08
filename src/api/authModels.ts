import { IProfileResult } from './profile/models/IProfileResult';

export interface ILoginBody {
  email: string;
  password: string;
}

export interface IRegisterBody {
  email: string;
  password: string;
  commandId: string;
}

export interface IVerifyResult {
  isValid: boolean;
  profile: IProfileResult | null;
}

export interface ILoginResult {
  token: string;
  profile: IProfileResult;
}
