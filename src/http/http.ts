import axios from 'axios';
import { message } from 'ant-design-vue';


const axiosInit = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? (location.href.includes('cmsuat.') ? 'https://dev.heybooks.net/front' : 'https://api.heybooks.net/front')  : '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    withCredentials: process.env.NODE_ENV === 'production' ? false : true
});

axiosInit.interceptors.request.use(config => {
    config.headers['token'] = '';
    return config;
}, err => {
    console.log(err);
});

axiosInit.interceptors.response.use(config => {
    switch (config.data.code) {
        case 200:
            message.success(config.data.message);
            break;
        default:
           
            break;
    }
    return (config.data);
}, err => {
    console.log(err);
    // Toast.fail("网络错误")
    Promise.reject(err);
});


export interface PublicType{
    code: number,
    data: any
}

export const get = (url: string, params: any): any => {
    console.log(params, 'process.env.VUE_APP_URL')
    return axiosInit({
        url,
        params
    // @ts-ignore
    }) ;
    
}

export const post = (url: string, data: any): any => {
    return axiosInit({
        url,
        data
    // @ts-ignore
    }) ;
}