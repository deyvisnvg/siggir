import axios, { AxiosHeaders, type AxiosError } from "axios";

interface HttpRequest {
    method: "get" | "post" | "put" | "delete";
    url: string;
    id?: string | number;
    body?: object | FormData;
    params?: Record<string, string | number>;
}

const config = axios.create({
    baseURL: "http://localhost:5000/api/v1/",
    /* headers: {
        "Content-Type": "application/json",
    }, */
});

export async function makeHttpRequest({ method, url, id, body, params }: HttpRequest) {

    const isMultipart = body instanceof FormData;
    const headers = new AxiosHeaders({
        "Content-Type": isMultipart ? "multipart/form-data" : "application/json",
    });

    const requests = {
        post: async () => await config.post(url, body, { headers }),
        get: async () => {
            let endpoint = id ? `${url}/${id}` : url;

            if (params) {
                const queryParams = new URLSearchParams(
                    Object.entries(params).map(([key, value]) => [key, String(value)])
                ).toString();
                endpoint = `${endpoint}?${queryParams}`;
            }
            return await config.get(endpoint, { headers });
        },
        put: async () => await config.put(`${url}/${id}`, body, { headers }),
        delete: async () => await config.delete(`${url}/${id}`, { headers }),
    };

    try {
        const { data } = await requests[method]();
        return data;
    } catch (error) {
        const err = error as AxiosError;
        return err.response?.data;
    }
}
