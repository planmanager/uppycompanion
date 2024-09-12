export = Drive;
/**
 * Adapter for API https://developers.google.com/drive/api/v3/
 */
declare class Drive extends Provider {
    list(options: any): Promise<any>;
    download({ id: idIn, token }: {
        id: any;
        token: any;
    }): Promise<any>;
    size({ id, token }: {
        id: any;
        token: any;
    }): Promise<any>;
    logout: typeof logout;
    refreshToken: typeof refreshToken;
}
import Provider = require("../../Provider");
import { logout } from "../index";
import { refreshToken } from "../index";
