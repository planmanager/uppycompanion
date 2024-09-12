declare function _exports(redisClient: import('ioredis').Redis, redisPubSubScope: string): {
    on: (eventName: string, handler: any) => void | EventEmitter<[never]>;
    off: (eventName: string, handler: any) => Promise<void> | EventEmitter<[never]>;
    once: (eventName: string, handler: any) => void | EventEmitter<[never]>;
    emit: (eventName: string, ...args: any[]) => void;
    removeListener: (eventName: string, handler: any) => Promise<void> | EventEmitter<[never]>;
    removeAllListeners: (eventName: string) => Promise<void> | EventEmitter<[never]>;
};
export = _exports;
import { EventEmitter } from "events";
