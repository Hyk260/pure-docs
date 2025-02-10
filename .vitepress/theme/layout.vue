<script setup>
import DefaultTheme from "vitepress/theme";
import HomePage from "./components/HomePage.vue";
import { useImageView } from "../utils/useImageView";
import { useToggleTheme } from "../utils/useToggleTheme";
import 'uno.css'

// 切换动画
useToggleTheme()
//  图片缩放
useImageView();
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-features-after>
      <HomePage />
    </template>
  </DefaultTheme.Layout>
</template>

<style>
/* 图片遮挡 */
.medium-zoom-overlay {
  z-index: 999;
  --at-apply: "card-df-br";
}
.medium-zoom-image.medium-zoom-image--opened {
  z-index: 1000;
}
</style>
