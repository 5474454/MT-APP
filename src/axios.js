import axios from "axios";
axios.defaults.baseURL = "http://api.duyiedu.com";

axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    config.params = {
      ...config.params,
      appkey: "longwaytogo_1583218156066"
    };
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

export default axios;
