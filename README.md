# learn react-native step by step

## 搭建开发环境

mac下搭建开发环紧

1. 安装homebrew
2. 使用homebrew下载node 和 watchman
  ```
  brew install node
  brew install watchman
  ```

3. 安装react-native-cli
  ```
  //可能需要管理员权限 加上sudo
  npm install react-native-cli -g
  ```
4. 如何使用react-native-cli 来初始化一个项目

  ```
  //注意点
  //1. 大写驼峰命名项目名称
  //2. 项目初始化不动了 一般是由于我帝国的墙太高了，解决方法： 设置npm的源为国内源
  // npm config set register  http://registry.cnpmjs.org
  // npm config set register  http://registry.npm.taobao.org
  react-native init YourProjectName
  cd YourProjectName
  react-native run-ios

  ```

## 入门

### props state styles 都是jsx语法中的概念 如果你之前开发过react， 那么就可以略过。唯一不同的地方就是styles的创建使用react-native 提供的StyleSheet组建来创建。

### 基础的组件
  1. View 组件 类似于html中div

  2. Image 组件 图片组件 和html中img标签不同的地方：
    * 指定图片的地址 使用source 属性
      ```
      <Image source={require('./logo.png')}/>
      ```
    * 如果图片不是本地图片 需要指定图片的width和height样式 否则不能显示
      ```
      <Image srouce="http://tesest/jjp.jpg" style={{width: 100, height: 100}}/>

      ```
  3. Text 用来显示一段文本 注意我们在html中可以直接把一段文本放到div等标签中 ， react－native中必须放到Text中。
  4. TextInput 输入框组件 onChangeText属性设置当输入文本发生变化的事件 （比较别扭，能改成和html中的input属性一样就更好了）
  5. ScrollView 用来展示可以滚动的结构 可以通过设置horizontal=true来设置水平滚动
  6. ListView 常用来有很多数据的列表
    * 它不会渲染整个列表 只是渲染在可视区域中的数据 性能更好
    * 需要设置dataSouce 和 renderRow属性。

  7. touchable 用来显示一个类似html中a标签的结构 onPress 设置tap事件 onLongPress设置长按事件
    * TouchableHighlight 点击之后背景变黑（默认）
    * ToucheableOpacity 点击之后透明度变化
    * TouchableWithoutFeedback 点击之后 没有变化
