<template>
  <div id="app" class="app">
    <MainMenu />
    <router-view/>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';

export default {
  name: 'App',
  components: {
    MainMenu,
  },
};
</script>

<style lang="scss">
.app {
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
