# Vercel 部署指引

如果想在 Vercel 上部署 PureChat，可以按照以下步骤进行操作：

## Vercel 部署流程

### 准备好你的 OpenAI API Key

前往 [OpenAI API Key](https://platform.openai.com/account/api-keys) 获取你的 OpenAI API Key

### 点击下方按钮进行部署

[![][deploy-button-image]][deploy-link]
直接使用 GitHub 账号登录即可，记得在环境变量页填入
`VITE_OPENAI_API_KEY` （OpenAI API Key）
`VITE_SDK_APPID`（腾讯IM sdkappid）
`VITE_SDK_KEY`（腾讯IM sdk密钥）
`VITE_NO_SERVICE`（必填）

### 部署完毕后，即可开始使用

### 绑定自定义域名（可选）

Vercel 分配的域名 DNS 在某些区域被污染了，绑定自定义域名即可直连。

## 自动同步更新

如果你根据上述中的一键部署步骤部署了自己的项目，你可能会发现总是被提示 “有可用更新”。这是因为 Vercel 默认为你创建新项目而非 fork 本项目，这将导致无法准确检测更新。

<!-- LINK GROUP -->

[deploy-button-image]: https://vercel.com/button
[deploy-link]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHyk260%2FPureChat&env=VITE_OPENAI_API_KEY,VITE_SDK_APPID,VITE_SDK_KEY,VITE_NO_SERVICE&project-name=pure-chat&repository-name=pure-chat