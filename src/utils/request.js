/* 
  请求模块
*/
import axios from "axios";
import store from '@/store/';


const request = axios.create({
  baseURL: "http://ttapi.research.itcast.cn" // 基础路径
});


// 请求拦截器
request.interceptors.request.use(config => {
  const { user } = store.state;

  if(user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config;
}, err => {
  return Promise.reject(err);
});



// 响应拦截器
// request.interceptors.response.use();

export default request;