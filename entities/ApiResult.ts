export type ApiResult<T> = {
  success: boolean;
  message: string;
  data?: T;
};
