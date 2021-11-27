import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const baseURL = process.env.BACKEND_URL

// Create Axios Instance
export const axiosInstance = axios.create({
    baseURL: baseURL
})

// Add a request interceptor
axios.interceptors.request.use(function (config: any) {
    const token = localStorage.get('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';

    return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

// Function that will be called to refresh authorization
const refreshAuthLogic = async (failedRequest: any) => {
    const refreshToken = localStorage.get('refreshToken')
    if (refreshToken) {
        axios.post('/auth/token/refresh', { refresh: refreshToken }).then(tokenRefreshResponse => {
            localStorage.setItem('token', tokenRefreshResponse.data.token);
            failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.token;
            return Promise.resolve();
        }).catch((err: any) => {
            if (err.response && err.response.status === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                window.location.href = '/login';
            }
            return Promise.resolve(err)
        })
    }
    return Promise.resolve(failedRequest)
};

// Instantiate Refresh Auth Logic interceptor
createAuthRefreshInterceptor(axios, refreshAuthLogic);