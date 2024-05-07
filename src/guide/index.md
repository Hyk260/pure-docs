# 介绍

PureChat 是一个基于 Vue3、Element-Plus 的聊天工作室(腾讯 IM 即时通讯)用于学习参考。

## 在线预览

- [在线预览](https://pureadmin.cn)

## Electron 版本

- [Electron 版本](https://gitee.com/H260788/PureChat/tree/electron/)

## SDK

- [腾讯 IM 即时通讯](https://cloud.tencent.com/product/im)

## 特点

- 🌚 光明/黑暗 模式主题切换`自动根据系统主题改变`
- ⚡️ 自定义 SVG 图标组件`svg-sprite-loader`
- 🔴 国际化`vue-i18n` 支持 English, 简体中文
- 🔧 Prettier + ESLint 规范
- 💡 Commitlint 提交规范
- ✨ electron 版本 支持 macOS、Windows 双平台
- 🛠 更多特性开发中

## Web

- 群聊支持@成员功能(支持拼音模糊搜索)
- 消息免打扰 红点提示
- 支持浏览器原生 Notification 提示(点击可定位到指定消息)
- 文本链接识别 (点击跳转新窗口打开)
- 聊天消息支持 `撤回` `转发` `回复` `删除` 功能(管理员支持撤回成员消息)
- 支持 「创建，解散」群 「添加，移除」成员
- 支持「文字」「图片」「抖音-QQ 表情包」「文件」「合并」「自定义」「链接」等格式消息发送
- 消息预加载机制 文件上传进度 拖拽发送 另存为
- 消息输入框使用富文本框 `wangEditor 5`开发(支持多类型消息混合发送)
- 内置 ChatGpt 机器人(支持上下文以及流式输出)
- 切换会话列表时 输入框草稿保存与回填功能
- 左侧聊天列表支持文件拖拽到消息框编辑后上传
- 支持消息撤回后重新编辑

## Elecron

::: warning 注意
支持 web 所有功能
:::

- 图标高亮闪烁提示
- 截图功能
- 支持外部协议打开应用
- 文件下载进度
- 窗口抖动

## 集成

PureChat / tools:

<ContentIntegrations />
