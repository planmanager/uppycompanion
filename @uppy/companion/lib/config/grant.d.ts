declare function _exports(): {
    googledrive: {
        callback: string;
        scope: string[];
        transport: string;
        custom_params: {
            access_type: string;
            prompt: string;
        };
        authorize_url: string;
        access_url: string;
        oauth: number;
        scope_delimiter: string;
    };
    googlephotos: {
        callback: string;
        scope: string[];
        transport: string;
        custom_params: {
            access_type: string;
            prompt: string;
        };
        authorize_url: string;
        access_url: string;
        oauth: number;
        scope_delimiter: string;
    };
    dropbox: {
        transport: string;
        authorize_url: string;
        access_url: string;
        callback: string;
        custom_params: {
            token_access_type: string;
        };
    };
    box: {
        transport: string;
        authorize_url: string;
        access_url: string;
        callback: string;
    };
    instagram: {
        transport: string;
        callback: string;
    };
    facebook: {
        transport: string;
        scope: string[];
        callback: string;
    };
    microsoft: {
        transport: string;
        scope: string[];
        callback: string;
    };
    zoom: {
        transport: string;
        authorize_url: string;
        access_url: string;
        callback: string;
    };
};
export = _exports;
