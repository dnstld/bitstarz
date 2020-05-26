<template>
  <header class="nav-header">
    <template v-if="isMenuOpened">
      <h1 class="nav-header__title">My account</h1>
    </template>

    <button
      @click="toggleMenu"
      type="button"
      class="nav-header__btnToggleMenu"
    >
      <BaseIcon name="arrow" width="12" height="12" />
    </button>
  </header>
</template>

<script>
export default {
  computed: {
    isMenuOpened() {
      return this.$store.state.isMenuOpened;
    },
  },
  methods: {
    toggleMenu() {
      this.$store.commit('TOGGLE_MENU');
    },
  },
};
</script>

<style lang="scss" scoped>
$header-height: 4rem;

.nav-header {
  align-items: center;
  display: flex;
  height: $header-height;
  padding: 0 1rem;
  position: relative;

  &__title {
    font-size: $text-20;
    text-transform: uppercase;
  }
  &__btnToggleMenu {
    background-color: rgba(255, 255, 255, .1);
    height: 1.5rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
    width: 1.5rem;
    @extend .btn-reset;
    @include color("color", "grey-500");
  }
}
</style>
