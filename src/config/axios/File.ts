import axios from "axios";

const apiFile = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    headers: {
        "Content-Type": "multipart/form-data"
    },
})
apiFile.interceptors.request.use(config => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(`API request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
},
    error => {
        console.error(`Request error: ${error}`)
        return Promise.reject(error);
    }
);

apiFile.interceptors.response.use(
    response => {
        console.log(`API response: ${response.status} ${response.config.url}`);
        return response;
    },
    error => {
        if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
            console.log('Request timed out');
        }
        return Promise.reject(error);
    }
);

export default apiFile;