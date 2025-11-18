import { ApiResponse, ErrorException, ValidationError } from "../../core/http/types";

export const ErrorResponse = (
  message: string,
  status_code = "500",
  errors?: ErrorException[] | ValidationError[]
): ApiResponse<null> => {
  return {
    meta: {
      success: false,
      status_code,
      message,
    },
    errors,
  };
};