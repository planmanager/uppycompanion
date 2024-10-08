/// <reference types="node" />
/// <reference types="node/http" />
export namespace errors {
    export { ProviderApiError };
    export { ProviderUserError };
    export { ProviderAuthError };
}
export const socket: (server: import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse> | import("https").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>) => void;
export function app(optionsArg?: object): {
    app: import('express').Express;
    emitter: any;
};
import { ProviderApiError } from "./server/provider/error";
import { ProviderUserError } from "./server/provider/error";
import { ProviderAuthError } from "./server/provider/error";
export function setLoggerProcessName({ loggerProcessName }: {
    loggerProcessName: any;
}): void;
