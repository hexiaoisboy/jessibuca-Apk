# jessibuca-Apk

# 简介

本项目使用的vue2 + jessibuca 进行视频流的播放再通过HBuilderX中的5+App进行打包最后生成apk安装包；
关于jessibuca支持的流格式及相关文档请移步 [jessibuca](http://jessibuca.monibuca.com/demo.html),

****

# 打包步骤

1.首先是vue的打包：  
    vue的路由模式要选择 ：hash 模式；  
    在vue.config.js中设置 ： publicPath: './'  
    之后使用npm run  build  进行打包  
2.打开HBuilderX选择新建项目 => 5+App=> 默认模式;  
3.将vue的打包文件dist中的所有内容 复制到 新建的5+App项目中;选择全部覆盖与替换；  
4.在新建的 5+App中找到 manifest.json 文件 依次设置项目名称、版本等；  
5.模版配置中的通讯录权限是默认开启的 不需要就要关闭（打包时如报错通讯权限时，可依次查看模版配置和权限配置 注意报错信息包含权限内容 权限配置参照报错信息删除即可）;  
6.选择 Hbuild 中的发行 => 原生 App-云打包  
弹框内容设置: 使用公共测试证书 关闭广告 => 打包；  
7.打包完成，进行安装测试

# 注意
由于浏览器中的好多方法 手机端是没有效果或者没有权限等问题，所以如您需要下载或截图等方法时需要借助 [plus](https://www.html5plus.org/doc/h5p.html)；  
本项目提供的测试安装包在apk文件夹内，可安装查看