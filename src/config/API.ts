import axios from "axios";

//! request
axios.interceptors.request.use(
    async (config: any) => {
        if (typeof window !== "undefined") {
            config.headers["Content-Type"] = "application/json";
            config.headers["Accept"] = "*/*";
            config.headers["Accept-Language"] = "en";
        }
        return config;
    },
    (err) => {
        if (err) {
            console.log("Something went wrong.");
        }
        return Promise.reject(err);
    }
);

//! response
axios.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error && typeof error.response === "undefined") {
            console.log("Something went wrong.");
        } else {
            switch (error.response.status) {
                case 429:
                    console.log("Too many request.");
                    break;
                default:
                    console.log("Something went wrong.");
            }
            const expectedError =
                error.response &&
                error.response.status >= 400 &&
                error.response.status < 500;
            if (!expectedError) {
                console.log("Server Error.");
            }
        }
        return Promise.reject(error);
    }
);

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
}
