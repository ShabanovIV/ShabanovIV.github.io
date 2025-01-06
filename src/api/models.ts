export interface LoginModel {
  email: string;
  password: string;
}

export interface RegisterModel {
  email: string;
  password: string;
  commandId: string;
}

export interface IVerifyResult {
  isValid: boolean;
  profile: {
    _id: string;
    email: string;
    signUpDate: string;
  } | null;
}

export interface ILoginResult {
  token: string;
  profile: {
    _id: string;
    email: string;
    signUpDate: string;
  };
}
