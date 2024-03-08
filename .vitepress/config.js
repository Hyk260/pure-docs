import { defineConfig } from "vitepress";
import process from "node:process";
import path from "node:path";
import { qqSvg } from "../src/icon/qqSvg";

export default defineConfig({
  lang: "zh-CN",
  title: "Pure Admin",
  base: "/",
  // 页面的描述。
  description:
    "基于 Vue3、Element-Plus 的中后台模版，提供了丰富的功能组件 聊天工作室 内置ChatGPT (腾讯 IM 即时通讯) 用于学习参考。",
  // 允许自定义上次更新的文本和日期格式。
  lastUpdated: {
    text: "上次更新:",
    formatOptions: {
      dateStyle: "full",
      timeStyle: "medium",
    },
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
  ],
  srcDir: path.join(process.cwd(), "src"),
  themeConfig: {
    // 导航栏上显示的 Logo，位于站点标题右侧。
    logo: "/favicon.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/Hyk260/PureAdmin" },
      {
        icon: { svg: qqSvg },
        link: "https://jq.qq.com/?_wv=1027&k=Cd4Ihd2J",
      },
    ],
    nav: [
      { text: "介绍", link: "/guide/" },
      {
        text: "github仓库",
        link: "https://github.com/Hyk260/PureAdmin",
      },
    ],
    sidebar: [
      {
        text: "前言",
        items: [
          { text: "介绍", link: "/guide/" },
          { text: "快速上手", link: "/guide/start" },
          { text: "项目配置", link: "/guide/config" },
          { text: "目录结构", link: "/guide/directory" },
        ],
      },
      {
        text: "其他",
        collapsed: true,
        items: [
          { text: "技术网站", link: "/guide/other/recommendation" },
          { text: "常见问题", link: "/guide/other/FAQ" },
        ],
      },
    ],
    // https://vitepress.dev/zh/reference/default-theme-footer#footer
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright (c) 2023 yongkang",
    },
    search: {
      provider: "local",
    },
  },
  // 项目的构建输出位置，相对于项目根目录。
  outDir: path.join(process.cwd(), "dist"),
  // 缓存文件的目录，相对于项目根目录。
  cacheDir: path.join(process.cwd(), "cache"),
});
