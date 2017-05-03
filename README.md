# Dive_Into_React_Redux

### basicGoThrough
React基础训练
![](http://om8hmotom.bkt.clouddn.com/2017-05-03-interface.gif)
![](http://om8hmotom.bkt.clouddn.com/2017-05-03-BMI.gif)


- Interface和BookList用来熟悉react&redux里的一些概念包括： 
	- render
	- setState
	- controlled component
	- container与component的区别
	- store
	- connect
	- applyMiddleware

- BMICalculator用来理解组件间通信的原理。

#### 总结
了解并训练react&redux基本原理与方法，感受使用react的乐趣。

### demo2
![](http://om8hmotom.bkt.clouddn.com/2017-05-03-Netflix.gif)
一个Netflix美剧的fakeSearch Demo，用来熟悉练习react开发总体流程，包括： 

- webpack打包配置及压缩优化(preact)
- 使用enzyme编写cheap-test
- 服务端渲染(出现了一些bug)
- 异步action，使用redux-thunk
- 使用最新版react-router v4
- 语法风格检查 standard (再也没有写过分号)

#### 总结
迅速过了一遍react开发到打包的流程，了解其主要思想，对各个技术点有一个基本认识，为后期针对性理解技术细节和开发完成度较高的app铺垫。

### 一个天气搜索应用

### Preview:    
[点击查看动图](http://om8hmotom.bkt.clouddn.com/weather.gif)

#### Tech Stack:

- react
- redux
- axios
- react-sparklines
- google-map

#### 简介
学习过程中的小demo，主要用来练习异步action的发起方法，所以暂时不考虑请求过程中的其他情况，为后期做todo应用打基础。 这里使用是googlemap，weatherAPI使用的也是国外的，所以本地运行时需要翻墙.

#### 思考总结
延伸考虑可以优化的点：

- 显示loading状态
- error handle and present
- various view mode (Add filter)

### 下一步
react初探告一段落，接下来将着重研究redux的内部原理。Fight！
