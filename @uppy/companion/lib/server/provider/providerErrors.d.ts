/**
 *
 * @param {{
 *   fn: () => any,
 *   tag: string,
 * providerName: string,
 *   isAuthError?: (a: { statusCode: number, body?: object }) => boolean,
 * isUserFacingError?: (a: { statusCode: number, body?: object }) => boolean,
 *   getJsonErrorMessage: (a: object) => string
 * }} param0
 * @returns
 */
export function withProviderErrorHandling({ fn, tag, providerName, isAuthError, isUserFacingError, getJsonErrorMessage, }: {
    fn: () => any;
    tag: string;
    providerName: string;
    isAuthError?: (a: {
        statusCode: number;
        body?: object;
    }) => boolean;
    isUserFacingError?: (a: {
        statusCode: number;
        body?: object;
    }) => boolean;
    getJsonErrorMessage: (a: object) => string;
}): Promise<any>;
export function withGoogleErrorHandling(providerName: any, tag: any, fn: any): Promise<any>;
