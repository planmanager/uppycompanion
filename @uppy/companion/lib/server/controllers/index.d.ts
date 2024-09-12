export let callback: (req: any, res: any, next: Function) => any;
export let deauthorizationCallback: typeof import("./deauth-callback");
export let sendToken: (req: any, res: any, next: Function) => void;
export let get: typeof import("./get");
export let thumbnail: typeof import("./thumbnail");
export let list: typeof import("./list");
export let simpleAuth: typeof import("./simple-auth");
export let logout: typeof import("./logout");
export let connect: (req: any, res: any, next: any) => void;
export let preauth: typeof import("./preauth");
export let redirect: (req: any, res: any) => void;
export let refreshToken: typeof import("./refresh-token");
