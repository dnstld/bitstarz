<template>
  <div id="app" class="app">
    <MainMenu class="app__menu" :class="{ 'app__menu--opened': isMenuOpened }" />
    <main class="app__main">
      <router-view/>
    </main>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';

export default {
  name: 'App',
  components: {
    MainMenu,
  },
  computed: {
    isMenuOpened() {
      return this.$store.state.isMenuOpened;
    },
  },
};
</script>

<style lang="scss">
$width-menu-mobile: 90px;
$width-menu-desktop: 262px;

.app {
  display: flex;
  height: 100%;
  overflow: hidden;
  width: 100%;

  &__menu {
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    transition: width .3s ease-out;
    width: 100%;
    max-width: $width-menu-mobile;
    z-index: 100;

    &--opened {
      max-width: $width-menu-desktop;
    }
    @media (min-width: 1200px) {
      position: relative;
    }
  }
  &__main {
    width: 100%;
    overflow-y: auto;
    padding-left: $width-menu-mobile;
    transition: padding-left .3s ease-out;

    @media (min-width: 1200px) {
      padding-left: 0;
    }
  }
}
</style>
