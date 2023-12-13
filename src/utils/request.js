import axios from 'axios'
// 最初浏览器页面向服务器请求数据时，返回的是整个页面，整个页面都会刷新，当我们只需要请求部分数据时，
// 返回整个页面会造成网络资源的占用，为了提高数据请求效率，异步网络请求Ajax出现了，它可以在页面无刷新的情况下请求数据。
// jQuery封装的ajax，原生的XMLHttpRequest，以及axios都可以实现异步网络请求。
// Axios（相比于原生的XMLHttpRequest对象来说） 简单易用,（相比于jQuery）axios包尺寸小且提供了易于扩展的接口，
// 是专注于网络请求的库。（axios本质上是原生XMLHttpRequest的封装）


const http = axios.create({
    //通用请求的地址前缀
    baseURL:'/api',
    timeout:10000 //超时时间
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default http
