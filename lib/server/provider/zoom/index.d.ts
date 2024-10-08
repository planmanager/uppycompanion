export = Zoom;
/**
 * Adapter for API https://marketplace.zoom.us/docs/api-reference/zoom-api
 */
declare class Zoom extends Provider {
    list(options: any): Promise<any>;
    download({ id: meetingId, token, query }: {
        id: any;
        token: any;
        query: any;
    }): Promise<any>;
    size({ id: meetingId, token, query }: {
        id: any;
        token: any;
        query: any;
    }): Promise<any>;
    logout({ companion, token }: {
        companion: any;
        token: any;
    }): Promise<any>;
    deauthorizationCallback({ companion, body, headers }: {
        companion: any;
        body: any;
        headers: any;
    }): Promise<any>;
    #private;
}
import Provider = require("../Provider");
