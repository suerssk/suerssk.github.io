# Description

## Resume -- 简历练习

## douban_pro

豆瓣首页    HTML+CSS    静态页面练习

## css3_picture_list

css3 图片列表 demo

> css3 使用
> 主要包含: flex布局 / transition 过渡等

## Bootstrap_StarBucks

星巴克官网 `响应式` 静态页面实现，包含:

> Bootstrap 4 版本栅格系统
> 卡片 / 轮播 / 按钮 等组件使用

## component_DatePicker

1. 基于 `@vue/cli` 脚手架完成日期选择器插件功能

    包含:

    > 1. 自定义指令
    > 2. 父子组件数据通信
    > 3. 双向数据绑定——父级监听子组件点击触发自定义事件
    > 4. vue 指令使用等
    > 5. ES6 语法等

2. run

此以 App.vue 为入口文件，导入 DatePicker 组件使用，在组件使用时使用 v-model 绑定要传递的日期数据

> (默认已安装好 node 环境) 需要安装 @vue/cli 和 @vue/cli-service-global (用于快速原型开发使用)
>> 1、 通过 `npm i @vue/cli -g` 安装。此命令很可能安装失败，推荐使用 `cnpm` 安装；或者通过 `yarn global add @vue/cli` 安装；
>> 2、 进入 src 目录下，使用 `Git Bash` 命令窗口运行 ``vue serve``；
>> 3、 上述命令运行完，会给出一个网址，一般为 `http://localhost:8080`，复制到浏览器打开此地址即可。

## meituan_app

模拟美团官网，利用 @vue/cli 4.3.1 脚手架搭建完成，包含:

1. vue 全家桶(部分使用 vuex / vue-router 等)
2. axios 网络请求
3. Mock.js 模拟需要请求的数据
4. Element-ui 使用

等等内容，仅作为本人理解 vue 全家桶、组件化开发的实例练习项目。

    ```
    // init ...
    npm install

    // run ...
    npm run serve
    
    // open browser: localhost:8080
    ```
