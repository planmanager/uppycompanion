export = Provider;
/**
 * Provider interface defines the specifications of any provider implementation
 */
declare class Provider {
    /**
     * config to extend the grant config
     */
    static getExtraGrantConfig(): {};
    /**
     * Name of the OAuth provider (passed to Grant). Return empty string if no OAuth provider is needed.
     *
     * @returns {string}
     */
    static get oauthProvider(): string;
    static grantDynamicToUserSession({ grantDynamic }: {
        grantDynamic: any;
    }): {};
    static get hasSimpleAuth(): boolean;
    static get authStateExpiry(): number;
    /**
     *
     * @param {{providerName: string, allowLocalUrls: boolean, providerGrantConfig?: object, secret: string}} options
     */
    constructor({ allowLocalUrls, providerGrantConfig, secret }: {
        providerName: string;
        allowLocalUrls: boolean;
        providerGrantConfig?: object;
        secret: string;
    });
    needsCookieAuth: boolean;
    allowLocalUrls: boolean;
    providerGrantConfig: any;
    secret: string;
    /**
     * list the files and folders in the provider account
     *
     * @param {object} options
     * @returns {Promise}
     */
    list(options: object): Promise<any>;
    /**
     * download a certain file from the provider account
     *
     * @param {object} options
     * @returns {Promise}
     */
    download(options: object): Promise<any>;
    /**
     * return a thumbnail for a provider file
     *
     * @param {object} options
     * @returns {Promise}
     */
    thumbnail(options: object): Promise<any>;
    /**
     * get the size of a certain file in the provider account
     *
     * @param {object} options
     * @returns {Promise}
     */
    size(options: object): Promise<any>;
    /**
     * handle deauthorization notification from oauth providers
     *
     * @param {object} options
     * @returns {Promise}
     */
    deauthorizationCallback(options: object): Promise<any>;
    /**
     * Generate a new access token based on the refresh token
     */
    refreshToken(options: any): Promise<void>;
    /**
     * @param {any} param0
     * @returns {Promise<any>}
     */
    simpleAuth({ requestBody }: any): Promise<any>;
}
declare namespace Provider {
    export { isOAuthProvider };
}
declare function isOAuthProvider(oauthProvider: any): boolean;
