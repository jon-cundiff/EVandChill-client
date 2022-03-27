import axios from "axios";

const apiAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8080",
});

export default apiAxios;