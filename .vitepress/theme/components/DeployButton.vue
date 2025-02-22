<template>
  <a :href="link" class="inline-block" target="_blank" rel="noreferrer">
    <img :src="image" class="disabled-img-view" alt="Deploy to Vercel" />
  </a>
</template>

<script setup>
const image = "https://vercel.com/button";
const link =
  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHyk260%2FPureChat&env=ENABLE_EXPERIMENTAL_COREPACK,VITE_IM_SDK_APPID,VITE_SERVICE_BASE_URL&project-name=pure-chat&repository-name=pure-chat";
</script>

<style lang="scss" scoped></style>
