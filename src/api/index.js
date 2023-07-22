import axios from "axios";
// 使用create方法来创建一个 axios实例
const $api = axios.create({
  baseURL: "http://localhost:3030", // 配置请求当中的一个共同的前置路径
});

// 请求拦截 在所有的请求发送之前对于请求的参数进行一个处理
$api.interceptors.request.use((config) => {
  // console.log('config', config);
  const { url, method } = config;

  // 从本地存储当中 获取token
  const token = window.localStorage.getItem("token");
  if (token && url !== "/authentication") {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // 注册用户的成时候也不添加token
  if (url === "/users" && method === "post") {
    delete config.headers.Authorization;
  }

  return config;
});

//  响应拦截 得到了结果之后我们可以对请求的数据进行一定程度的处理
$api.interceptors.response.use(
  (response) => {
    // console.log('response 拦截的结果', response);
    return response;
  },
  (error) => {
    // 对于请求的错误我们可以提前的干预
    // console.log("err", error);
    const { status } = error.response;
    if (status === 401) {
      // console.log('跳转到登录页');
        window.location.href = "/#/login";
    }
    return Promise.reject(error);
  }
);

export default $api;
