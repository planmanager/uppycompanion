export function encodeState(state: any, secret: any): string;
export function decodeState(state: any, secret: any): any;
export function generateState(): {
    id: string;
};
export function getFromState(state: any, name: any, secret: any): any;
export function getGrantDynamicFromRequest(req: any): any;
