export function hasMatch(value: string, criteria: string[]): boolean;
export function jsonStringify(data: object): string;
export function getURLBuilder(options: object): (subPath: string, isExternal: boolean, excludeHost?: boolean) => string;
export function encrypt(input: string, secret: string | Buffer): string;
export function decrypt(encrypted: string, secret: string | Buffer): string;
export function defaultGetKey({ filename }: {
    filename: any;
}): string;
export function prepareStream(stream: any): Promise<any>;
export function getBasicAuthHeader(key: any, secret: any): string;
export function rfc2047EncodeMetadata(metadata: any): any;
export function getBucket({ bucketOrFn, req, metadata, filename }: {
    bucketOrFn: string | ((a: {
        req: import('express').Request;
        metadata: Record<string, string>;
        filename: string | undefined;
    }) => string);
    req: import('express').Request;
    metadata?: Record<string, string>;
    filename?: string;
}): string;
export class HttpError extends Error {
    constructor({ statusCode, responseJson }: {
        statusCode: any;
        responseJson: any;
    });
    statusCode: any;
    responseJson: any;
}
