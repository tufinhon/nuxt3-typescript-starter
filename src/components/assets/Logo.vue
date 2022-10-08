<script lang="ts">
export default defineComponent({
  name: 'Logo'
});
</script>

<template>
  <img
    class="nuxt-logo"
    viewBox="0 0 45 30"
    alt="Vuetify Logo"
    src="public/img/weplay1.png"
  />
</template>

<style scoped lang="scss">
.nuxt-logo {
  height: 55px;
  transform: rotateY(560deg);
  animation: turn 5.5s ease-out forwards 2s;
}
@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
