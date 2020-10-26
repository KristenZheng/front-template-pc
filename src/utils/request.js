import axios from 'axios';
// import router from '@/router';
const baseApi = process.env.VUE_APP_API_URL;

const service = axios.create({
  baseURL: baseApi,
  withCredentials: false,
  responseType: 'json',
  timeout: 10000
});

service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = localStorage.getItem('token');
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    switch (error.response.status) {
      case 401:
        // deal unauthorized condition
        break;
    }
    return Promise.reject(error.response.data);
  }
);

export const http = {
  get: (url, params) => {
    return new Promise((resolve, reject) => {
      service.get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
    });
  },
  post: (url, params) => {
		return new Promise((resolve, reject) => {         
      service.post(url, params || {})        
      .then(res => {            
          resolve(res.data);        
      })        
      .catch(err => {            
          reject(err.data)        
      })    
    });
  }
}