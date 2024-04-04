import { defineConfig } from "vitepress";
import process from "node:process";
import path from "node:path";
import { qqSvg } from "../src/icon/qqSvg";

const Nav = [
  { text: "介绍", link: "/guide/" },
  { text: "常见问题", link: "/other/FAQ" },
  {
    text: "链接",
    items: [
      { text: "在线预览", link: "https://pureadmin.cn" },
      { text: "gitee仓库", link: "https://gitee.com/H260788/PureChat" },
      { text: "github仓库", link: "https://github.com/Hyk260/PureChat" },
    ],
  },
];
const Sidebar = [
  {
    text: "前言",
    items: [
      { text: "介绍", link: "/guide/" },
      { text: "快速上手", link: "/guide/start" },
      { text: "项目配置", link: "/guide/config" },
      { text: "目录结构", link: "/guide/directory" },
      // { text: "提交规范", link: "/guide/commitlint" },
    ],
  },
  {
    text: "其他",
    collapsed: true,
    items: [
      { text: "技术网站", link: "/other/recommendation" },
      { text: "常见问题", link: "/other/FAQ" },
      { text: "大语言模型指南", link: "/other/model" },
    ],
  },
];

export default defineConfig({
  lang: "zh-CN",
  title: "PureChat",
  // https://vitepress.dev/zh/reference/site-config#base
  base: "/pure-docs/", // /pure-docs/
  description: "PureChat文档",
  head: [
    ["link", { rel: "icon", href: "./favicon.ico" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
  ],
  themeConfig: {
    // 自定义上次更新的文本和日期格式。
    lastUpdated: {
      text: "上次更新",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    // cleanUrls: true,
    ignoreDeadLinks: [/^\/play/, /^\/interactive/, /:\/\/localhost/],
    markdown: {
      theme: {
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
    },
    // 导航栏上显示的 Logo，位于站点标题右侧。
    logo: "/favicon.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/Hyk260/PureChat" },
      {
        icon: { svg: qqSvg },
        link: "https://jq.qq.com/?_wv=1027&k=Cd4Ihd2J",
      },
    ],
    nav: Nav,
    sidebar: Sidebar,
    // https://vitepress.dev/zh/reference/default-theme-footer#footer
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright (c) 2023 yongkang",
    },
    search: {
      provider: "local",
    },
  },
  srcDir: path.join(process.cwd(), "src"),
  // 项目的构建输出位置，相对于项目根目录
  outDir: path.join(process.cwd(), "dist"),
  // 缓存文件的目录，相对于项目根目录
  cacheDir: path.join(process.cwd(), "cache"),
});
