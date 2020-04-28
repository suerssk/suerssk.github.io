import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8080";

// 响应拦截
axios.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data;
    }
    return response;
});

export default axios;