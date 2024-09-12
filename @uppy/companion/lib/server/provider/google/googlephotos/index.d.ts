export = GooglePhotos;
/**
 * Provider for Google Photos API
 */
declare class GooglePhotos extends Provider {
    list(options: any): Promise<any>;
    download({ id, token }: {
        id: any;
        token: any;
    }): Promise<any>;
    logout: typeof logout;
    refreshToken: typeof refreshToken;
}
import Provider = require("../../Provider");
import { logout } from "../index";
import { refreshToken } from "../index";
