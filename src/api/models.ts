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

// Модели для работы с профилем
export interface IProfileResult {
  id: string;
  name: string;
  email: string;
  signUpDate: Date;
  commandId: string;
}

export interface UpdateProfileBody {
  name: string;
}

export interface ChangePasswordBody {
  password: string;
  newPassword: string;
}

export interface ChangePasswordResult {
  success: boolean;
}

// Ошибки
export type ServerErrors = {
  errors: {
    extensions: {
      code: ErrorCode;
    };
    name: string;
    fieldName?: string;
    stack: string;
    message: string;
  }[];
};

export enum ErrorCode {
  ERR_INCORRECT_EMAIL_OR_PASSWORD = 'ERR_INCORRECT_EMAIL_OR_PASSWORD',
  ERR_ACCOUNT_ALREADY_EXIST = 'ERR_ACCOUNT_ALREADY_EXIST',
  ERR_FIELD_REQUIRED = 'ERR_FIELD_REQUIRED',
  ERR_INCORRECT_PASSWORD = 'ERR_INCORRECT_PASSWORD',
  ERR_INVALID_PASSWORD = 'ERR_INVALID_PASSWORD',
  ERR_NOT_VALID = 'ERR_NOT_VALID',
  ERR_AUTH = 'ERR_AUTH',
  ERR_NO_FILES = 'ERR_NO_FILES',
  ERR_NOT_ALLOWED = 'ERR_NOT_ALLOWED',
  ERR_NOT_FOUND = 'ERR_NOT_FOUND',
  ERR_VALIDATION_ERROR = 'ERR_VALIDATION_ERROR',
  ERR_INVALID_QUERY_PARAMS = 'ERR_INVALID_QUERY_PARAMS',
  ERR_INTERNAL_SERVER = 'ERR_INTERNAL_SERVER',
}
