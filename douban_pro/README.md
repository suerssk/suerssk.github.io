# 豆瓣首页

[TOC]

**表单登录部分是直接引用的 豆瓣登录表单的 iframe**

## 用到的知识点

### 雪碧图

    设置背景    再通过 background-position 定位、background-size 设置大小



### background-position: calc();    自适应背景位置

calc是英文单词calculate(计算)的缩写，是css3的一个新增的功能，用来指定元素的长度。
可以使用calc()给元素的border、margin、pading、font-size和width等属性设置动态值。

**calc()最大的好处就是用在流体布局上，可以通过calc()计算得到元素的宽度。**


此 calc()函数用一个表达式作为它的参数，用这个表达式的结果作为值。这个表达式可以是任何如下操作符的组合，采用标准操作符处理法则的简单表达式。
```
    +   加法
    -   减法
    *   乘法，乘数中至少要有一个是 <number> 类型的
    /   除法，除数（/右面的数）必须是 <number> 类型的 
```
    + 和 - 运算符的两边必须始终要有空白符。
    * 和 / 运算符不需要空白符，但考虑到统一性，仍然推荐加上空白符。

[calc() MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc)