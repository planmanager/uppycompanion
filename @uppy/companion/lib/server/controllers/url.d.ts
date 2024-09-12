declare namespace _exports {
    export { downloadCallback };
}
declare function _exports(): import("express-serve-static-core").Router;
export = _exports;
type downloadCallback = (err: Error, chunk: string | Buffer | Buffer[]) => any;
