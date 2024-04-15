<script setup>
const props = defineProps({
  items: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div class="wrap">
    <a v-for="item of items" :key="item.name" class="link" :href="item.link" target="_blank">
      <!-- <div v-if="item.icon.startsWith('i')" :class="item.icon" />
      <img v-else :src="item.icon" /> -->
      <span>{{ item.name }}</span>
      <span>{{ item.secondary }}</span>
    </a>
  </div>
</template>

<style scoped>
.wrap {
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
}
.link {
  color: inherit !important;
  text-decoration: none !important;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;

  touch-action: manipulation;
  height: 7.5rem;
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  text-underline-offset: 2px;
}
.link:hover {
  color: var(--vp-c-brand) !important;
  border-color: var(--vp-c-brand) !important;
}
</style>
