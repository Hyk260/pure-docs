// https://vitepress.dev/guide/custom-theme
import Theme from "vitepress/theme";
import { h, watch } from "vue";

import Callout from "./components/Callout.vue";
import ContentIntegrations from "./components/ContentIntegrations.vue";

import layout from "./layout.vue";
// import "./style/style.css";
import "./style/overrides.css";
import "./style/rainbow.css";
import "./style/vars.css";
import "./style/index.css";

let homePageStyle = null;

export default {
  ...Theme,
  Layout() {
    return h(layout);
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window === "undefined") return;
    app.component("Callout", Callout);
    app.component("ContentIntegrations", ContentIntegrations);
    watch(
      () => router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === "/"),
      { immediate: true }
    );
  },
};

if (typeof window !== "undefined") {
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes("chrome"))
    document.documentElement.classList.add("browser-chrome");
  else if (browser.includes("firefox"))
    document.documentElement.classList.add("browser-firefox");
  else if (browser.includes("safari"))
    document.documentElement.classList.add("browser-safari");
}

function updateHomePageStyle(value) {
  if (value) {
    if (homePageStyle) return;
    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `:root { animation: rainbow 12s linear infinite; }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;
    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
