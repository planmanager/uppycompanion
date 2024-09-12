/// <reference types="node" />
export function getURLMeta(url: string, allowLocalIPs?: boolean): Promise<{
    name: string;
    type: string;
    size: number;
}>;
export const FORBIDDEN_IP_ADDRESS: "Forbidden IP address";
/**
 * Validates that the download URL is secure
 *
 * @param {string} url the url to validate
 * @param {boolean} allowLocalUrls whether to allow local addresses
 */
export function validateURL(url: string, allowLocalUrls: boolean): boolean;
/**
 * Returns http Agent that will prevent requests to private IPs (to prevent SSRF)
 */
export function getProtectedHttpAgent({ protocol, allowLocalIPs }: {
    protocol: any;
    allowLocalIPs: any;
}): {
    new (options?: https.AgentOptions): {
        createConnection(options: any, callback: any): any;
    };
};
export function getProtectedGot({ allowLocalIPs }: {
    allowLocalIPs: any;
}): Promise<import("got", { with: { "resolution-mode": "import" } }).Got>;
import https = require("node:https");
