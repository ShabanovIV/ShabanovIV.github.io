export const ErrorTypes = {
  None: 'none',
  Validate: 'validate',
  Server: 'server',
} as const;

export type ErrorType = (typeof ErrorTypes)[keyof typeof ErrorTypes];

export interface IResult<TData> {
  Error: {
    Type: ErrorType;
    Message: string;
  };
  Data: TData;
}
