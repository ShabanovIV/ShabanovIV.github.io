export interface LoginModel {
  username: string;
  password: string;
}

export interface RegisterModel {
  username: string;
  password: string;
}

export interface IVerifyResult {
  isValid: boolean;
  user: {
    id: number;
    username: string;
  } | null;
}

export interface ILoginResult {
  token: string;
  user: {
    id: number;
    username: string;
  };
}
