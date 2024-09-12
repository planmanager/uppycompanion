export function refreshToken({ clientId, clientSecret, refreshToken: theRefreshToken }: {
    clientId: any;
    clientSecret: any;
    refreshToken: any;
}): Promise<any>;
export function logout({ token }: {
    token: any;
}): Promise<any>;
