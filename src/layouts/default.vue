<script setup lang="ts">
useLayout();
</script>

<template>
  <div>
    Some default layout shared across all pages
    <br />
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>

<style lang="scss">
// Default Scrollbar Auto-Hide
html {
  overflow-y: auto;
}
</style>
