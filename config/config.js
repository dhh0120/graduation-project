export default {
    //添加 singular 为 true 来让 page 变为约定的文件夹
    singular: true,
    dva: {},
    antd: {},
    //配置式的路由
    routes: [{
        path: '/',
        component: './HelloWorld'
    }]
}