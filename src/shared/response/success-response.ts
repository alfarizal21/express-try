import { ApiResponse } from "../../core/http/types";

export const SuccessResponse = <T>(
    message = "Success",
    status_code = "200",
    data?: T,
): ApiResponse<T> => {
    if (data) {
        return {
            meta: {
                success: true,
                status_code,
                message,
            },
            data,
        };
    }
    return {
        meta: {
            success: true,
            status_code,
            message,
        },
    };
};