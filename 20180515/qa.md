# 1. 现代前端与传统前端开发模式上有什么不同？
## 传统前端特点
### 技术特点
* HTML + CSS + JS + JQuery
* 使用 JSP or 其他模板引擎填入数据，渲染依赖于后端
* 缺陷
>* HTML/CSS 占主导（好的设计师就可以玩转）
>* 无模块化
>* 无法产出符合工程化要求代码
>* 组件隔离性差，无法复用
>* 异步控制流混乱
>* 多页面应用，用户体验差
### 架构特点
* 传统 MVC 架构如下图
>![传统 MVC 架构](https://github.com/guoyan5guoyan/img/raw/master/%E4%BC%A0%E7%BB%9FMVC%E6%9E%B6%E6%9E%84.jpg)
## 现代前端特点
### 技术特点
* 技术栈
ES6 + FP + Node.js + Webpack + React/Vue/Angular + 状态管理 + babel + ......
* 优势
>* 以 JS 为核心
>* 代码模块化
>* 开发热更新
>* 良好的工程化解决方案
>* 组件隔离性好，无门槛复用
>* 一般是单页面应用，用户体验好
### 架构特点
* 一般采用前后分离的架构，如下图
>![现代前端架构](https://github.com/guoyan5guoyan/img/raw/master/%E7%8E%B0%E4%BB%A3%E5%89%8D%E7%AB%AF.jpg)
## 总结：现代前端在数据可视化方面更为专业
  
# 2. 命令式编程 与 声明式编程 有何不同？
## 命令式编程
* 命令“机器”如何去做事情(how)，这样不管你想要的是什么(what)，它都会按照你的命令实现。
* 命令式编程语言：C, Java
## 声明式编程
* 告诉“机器”你想要的是什么(what)，让机器想出如何去做(how)。
* 声明式编程语言：SQL, HTML, CSS
  
# 3. 什么是 React Compoent? 它一般继承于什么？一般至少实现哪个方法？
* React Compoent 是 **React** 组件，Compoent 是 React 最强大的功能之一。其具有以下特点：
>* 组件是自定义元素，是 React 的最小重用单元
>* 组件高内聚，低耦合
* Compoent 一般继承于 *React.component*，一般至少实现 *render()* 方法。
  
# 4. JSX 语法对比普通 JavaScript 有何不同？它是如何解析的？（建议结合网上资料回答）
## JSX & JS概述
* JSX:即JavaScript XML，一种在React组件内部构建标签的类XML语法，目的是为了增强React程序组件的可读性
* JS：即JavaScript，一种直译式脚本语言
## 区别
1. 浏览器只能识别普通的js，普通的css，并不能识别scss，或者jsx（scss是css的拓展，jsx可以看做是js的拓展），所以webpack的作用是把scss转换为css，把jsx转换为浏览器可以识别的js，然后浏览器才能正常使用。
2. js就是本身并不支持react里面的jsx（也就是在js文件里面直接写html那种），现在他们可以直接写是因为编辑器可以选择语言的解析模式了，编辑器正确显示是因为 虽然是.js文件，编辑器用了.jsx的解析模式，所以显示正确。
3. .jsx文件会自动触发编辑器，以jsx的模式解析当前的文件，所以可以更不会出错。
## JSX的解析
JSX语法，像是在Javascript代码里直接写XML的语法，实质上这只是一个语法糖，每一个XML标签都会被JSX转换工具转换成纯Javascript代码，React 官方推荐使用JSX， 当然你想直接使用纯Javascript代码写也是可以的，只是使用JSX，组件的结构和组件之间的关系看上去更加清晰。  

# 5. 阻塞调用与非阻塞调用有何不同？
## 阻塞 
阻塞调用是指调用结果返回之前，当前线程会被挂起。函数只有在得到结果之后才会返回。
## 非阻塞 
非阻塞和阻塞的概念相对应，指在不能立刻得到结果之前，该函数不会阻塞当前线程，而会立刻返回。 
## 举例：例如读取一个文件
* 如果阻塞的话，就等读取完，再执行下一行代码。
* 如果采用非阻塞模式，那么不等读取的文件返回，就执行下一行代码。这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。

# 作业链接
https://github.com/guoyan5guoyan/mfs-react-homework
https://github.com/guoyan5guoyan/mfs-react-homework/tree/master/20180515