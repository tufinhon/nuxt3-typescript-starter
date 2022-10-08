<template>
  <img
    class="vuetify-logo"
    alt="Vuetify Logo"
    src="svg/brands/vuetify-logo.svg"
  />
</template>

<style scoped lang="scss">
.vuetify-logo {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
