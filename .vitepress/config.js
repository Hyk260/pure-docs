import path from "node:path";
import process from "node:process";
import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  // localIconLoader,
} from "vitepress-plugin-group-icons";
import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import { qqSvg } from "../src/icon/qqSvg";

const Nav = [
  { text: "介绍", link: "/preface/" },
  { text: "常见问题", link: "/other/FAQ" },
  { text: "更新日志", link: "/other/logs" },
  {
    text: "链接",
    items: [
      { text: "在线预览", link: "https://purechat.cn" },
      { text: "后端地址", link: "https://github.com/Hyk260/pure-backend" },
      { text: "Electron", link: "https://github.com/Hyk260/PureChat/releases" },
      { text: "gitee仓库", link: "https://gitee.com/H260788/PureChat" },
      { text: "github仓库", link: "https://github.com/Hyk260/PureChat" },
    ],
  },
];

const Head = [
  ["link", { rel: "icon", href: "./favicon.ico" }],
  [
    "meta",
    {
      name: "keywords",
      content: "purechat, purechat docs",
    },
  ],
  [
    "meta",
    {
      name: "viewport",
      content:
        "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
    },
  ],
  ["meta", { name: "author", content: "yongkang" }],
  // ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
];

const Sidebar = [
  {
    text: "前言",
    items: [
      { text: "介绍", link: "/preface/" },
      { text: "快速上手", link: "/preface/start" },
      { text: "项目配置", link: "/preface/config" },
      { text: "目录结构", link: "/preface/directory" },
      { text: "提交规范", link: "/preface/commitlint" },
    ],
  },
  {
    text: "其他",
    // collapsed: true,
    items: [
      { text: "技术网站", link: "/other/recommendation" },
      { text: "常见问题", link: "/other/FAQ" },
      { text: "更新日志", link: "/other/logs" },
      { text: "私有化部署", link: "/other/deploy" },
    ],
  },
  {
    text: "AI指南",
    items: [
      { text: "大语言模型指南", link: "/guides/model" },
      { text: "提示词指南", link: "/guides/prompts" },
      { text: "模型服务商", link: "/guides/model-provider" },
      { text: "Ollama集成", link: "/guides/ollama" },
      { text: "Ollama使用", link: "/guides/olama-usage" },
    ],
  },
];

const ogUrl = "https://hyk260.github.io/pure-docs";

export default defineConfig({
  lang: "zh-CN",
  title: "PureChat",
  // https://vitepress.dev/zh/reference/site-config#base
  base: "/pure-docs/", // /pure-docs/
  description: "PureChat文档",
  head: Head,
  themeConfig: {
    editLink: {
      pattern: "https://github.com/Hyk260/pure-docs/edit/main/src/:path",
      text: "为此页提供修改建议",
    },
    outline: {
      label: "本页目录",
      level: [2, 3],
    },
    // 自定义上次更新的文本和日期格式。
    lastUpdated: {
      text: "上次更新",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    // https://vitepress.dev/zh/reference/site-config#cleanurls
    cleanUrls: true,
    // https://vitepress.dev/zh/reference/site-config#ignoredeadlinks
    ignoreDeadLinks: [/^\/play/, /^\/interactive/, /:\/\/localhost/],
    markdown: {
      config(md) {
        md.use(groupIconMdPlugin);
      },
      codeTransformers: [transformerTwoslash()],
      theme: {
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
    },
    transformPageData(pageData) {
      const canonicalUrl = `${ogUrl}/${pageData.relativePath}`
        .replace(/\/index\.md$/, "/")
        .replace(/\.md$/, "/");
      pageData.frontmatter.head ??= [];
      pageData.frontmatter.head.unshift(
        ["link", { rel: "canonical", href: canonicalUrl }],
        ["meta", { property: "og:title", content: pageData.title }]
      );
      return pageData;
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
  outDir: path.join(process.cwd(), "docs"),
  // 缓存文件的目录，相对于项目根目录
  cacheDir: path.join(process.cwd(), "cache"),
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          gitlab: "vscode-icons:file-type-gitlab",
        },
      }),
    ],
    server: {
      open: true,
    },
  },
});
