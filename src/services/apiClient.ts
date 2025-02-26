import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

class ApiClient<T> {
    endPoint: string;
    constructor(endPoint: string) {
        this.endPoint = endPoint;
    }

    getAll = async (params?: AxiosRequestConfig["params"]) => {
        return await axiosInstance.get<T[]>(this.endPoint, {params}).then((res) => res.data);
    }

    post = async (data: T) => {
        return await axiosInstance.post<T>(this.endPoint, data).then((res) => res.data);
    }

}
export default ApiClient;