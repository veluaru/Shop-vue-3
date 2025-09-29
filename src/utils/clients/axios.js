import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request handler if needed for auth

apiClient.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  (response) => response,
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  (error) => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;