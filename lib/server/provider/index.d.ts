export function getProviderMiddleware(providers: Record<string, typeof Provider>, grantConfig: any): (req: object, res: object, next: Function, providerName: string) => void;
export function getDefaultProviders(): Record<string, typeof Provider>;
export function addCustomProviders(customProviders: Record<string, CustomProvider>, providers: Record<string, typeof Provider>, grantConfig: object): void;
export function addProviderOptions(companionOptions: {
    server: object;
    providerOptions: object;
}, grantConfig: object, getOauthProvider: (a: string) => string): void;
export type CustomProvider = {
    'module': typeof Provider;
    config: Record<string, unknown>;
};
import Provider = require("./Provider");
