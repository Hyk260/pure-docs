<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "default",
    validator: (value) => {
      return ["default", "important", "tip", "warning", "info"].includes(value);
    },
  },
});
</script>

<template>
  <div :class="['layoutkit', type]">
    <slot></slot>
  </div>
</template>

<style scoped>
.layoutkit {
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
  border: 1px solid transparent;
}
.default {
  background: rgba(54, 158, 255, 0.1);
  border-color: rgba(54, 158, 255, 0.5);
  color: rgb(54, 158, 255);
}
.important {
  background: rgba(189, 84, 198, 0.1);
  border-color: rgba(189, 84, 198, 0.5);
  color: rgb(189, 84, 198);
}
.tip {
  background: rgba(85, 180, 103, 0.1);
  border-color: rgba(85, 180, 103, 0.5);
  color: rgb(85, 180, 103);
}
.warning {
  background: rgba(255, 128, 43, 0.1);
  border-color: rgba(255, 128, 43, 0.5);
  color: rgb(255, 128, 43);
}
.info {
  background: rgba(54, 158, 255, 0.1);
  border-color: rgba(54, 158, 255, 0.5);
  color: rgb(54, 158, 255);
}
</style>
