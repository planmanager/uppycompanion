export function generateEncryptedToken(payload: any, secret: string, maxAge?: number): string;
export function generateEncryptedAuthToken(payload: any, secret: string, maxAge: any): string;
export function verifyEncryptedToken(token: string, secret: string): any;
export function verifyEncryptedAuthToken(token: string, secret: string, providerName: any): any;
export function addToCookiesIfNeeded(req: any, res: any, uppyAuthToken: any, maxAge: any): void;
export function removeFromCookies(res: object, companionOptions: object, oauthProvider: string): void;
export const MAX_AGE_24H: number;
export const MAX_AGE_REFRESH_TOKEN: number;
