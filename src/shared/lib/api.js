import axios from "axios";

export const axiosApiURL=axios.create({
    baseURL:import.meta.env.VITE_APP_API
})