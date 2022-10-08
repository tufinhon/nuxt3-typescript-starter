<template>
  <NuxtPage />
</template>

<script lang="ts">
export default defineComponent({
  name: 'EmptyLayout',
  setup() {
    return {};
  }
});
</script>

<style scoped lang="scss">
.v-application {
  background: cyan//$primary-gradient;
}
</style>
