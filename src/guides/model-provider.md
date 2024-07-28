# 模型服务商

PureChat 在部署时提供了丰富的模型服务商相关的环境变量，你可以使用这些环境变量轻松定义需要在 PureChat 中开启的模型服务商。

## OpenAI

### `OPENAI_API_KEY`

- 类型：必选
- 描述：这是你在 OpenAI 账户页面申请的 API 密钥，可以前往 [这里](https://platform.openai.com/api-keys) 查看
- 默认值：-
- 示例：`sk-xxxxxx...xxxxxx`

### `OPENAI_PROXY_URL`

- 类型：可选
- 描述：如果你手动配置了 OpenAI 接口代理，可以使用此配置项来覆盖默认的 OpenAI API 请求基础 URL
- 默认值：`https://api.openai.com/v1`
- 示例：`https://api.chatanywhere.cn` 或 `https://aihubmix.com/v1`

<Callout type='warning'>
  请检查你的代理服务商的请求后缀，有的代理服务商会在请求后缀添加
  `/v1`，有的则不会。如果你在测试时发现 AI 返回的消息为空，请尝试添加 `/v1` 后缀后重试。
</Callout>

<Callout type='info'>
  是否填写 `/v1` 跟模型服务商有很大关系，比如 openai 的默认地址是 `api.openai.com/v1`
  。如果你的代理商转发了 `/v1` 这个接口，那么直接填 `proxy.com` 即可。 但如果模型服务商是直接转发了
  `api.openai.com` 域名，那么你就要自己加上 `/v1` 这个 url。
</Callout>


## 智谱 AI

### `ZHIPU_API_KEY`

- 类型：必选
- 描述：这是你在 智谱 AI 服务中申请的 API 密钥
- 默认值：-
- 示例：`4582d332441a313f5c2ed9824d1798ca.rC8EcTAhgbOuAuVT`

## 01 AI

### `ZEROONE_API_KEY`

- 类型：必选
- 描述：这是你在零一万物服务中申请的 API 密钥
- 默认值：-
- 示例：`xxxxxx...xxxxxx`

[model-list]: /docs/self-hosting/advanced/model-list

## 通义千问

### `QWEN_API_KEY`

- 类型：必选
- 描述：这是你在阿里云百炼平台上获取的 DashScope API 密钥
- 默认值：-
- 示例：`sk-xxxxx...xxxxx`
