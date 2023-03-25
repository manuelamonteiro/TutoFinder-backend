export function badRequestError() {
    return {
        name: "BadRequestError",
        message: "The server cannot or will not process the request!",
    };
}