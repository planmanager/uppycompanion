/**
 * AuthError is error returned when an adapter encounters
 * an authorization error while communication with its corresponding provider
 */
export class ProviderAuthError extends ProviderApiError {
    constructor();
}
/**
 * ProviderApiError is error returned when an adapter encounters
 * an http error while communication with its corresponding provider
 */
export class ProviderApiError extends Error {
    /**
     * @param {string} message error message
     * @param {number} statusCode the http status code from the provider api
     */
    constructor(message: string, statusCode: number);
    statusCode: number;
    isAuthError: boolean;
}
export class ProviderUserError extends ProviderApiError {
    /**
     * @param {object} json arbitrary JSON.stringify-able object that will be passed to the client
     */
    constructor(json: object);
    json: any;
}
export function respondWithError(err: any, res: any): boolean;
