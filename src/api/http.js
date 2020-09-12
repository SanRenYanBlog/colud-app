import axios from 'axios'
import {HOST} from './url'

class Http{
  constructor(base_url){
    this.base_url = base_url;
  }

  // 统一提供封装好的请求，项目的所有请求最终都是由这个函数处理
  request(url, method = 'GET', data = {}){
    // 配置请求配置项
    let options = {
      url,
      method,
      baseURL: this.base_url
    };
    // 处理请求的参数
    if(method === 'GET'){
      options = {
        ...options,
        params: data
      }
    }else if(method === 'POST'){
      options = {
        ...options,
        data
      }
    }
    // 创建请求
    const instance = axios.create();
    // 发送请求
    return instance.request(options);
  }

  // get请求
  get(url, data = {}){
    return this.request(url, 'GET', data);
  }

  // post请求
  post(url, data = {}){
    return this.request(url, 'POST', data);
  }
}

export default new Http(HOST);
