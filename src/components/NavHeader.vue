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
      <BaseIcon
        name="arrow"
        width="12"
        height="12"
        :class="{ 'nav-header__btnicon--opened': isMenuOpened }"
      />
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
$height-header: 4rem;
$padding-header: 0 1rem;
$font-size-title: $text-20;
$bg-color-btn-toggle: rgba(255, 255, 255, .1);
$size-btn-toggle: 1.5rem;

.nav-header {
  align-items: center;
  display: flex;
  height: $height-header;
  padding: $padding-header;
  position: relative;

  &__title {
    font-size: $font-size-title;
    text-transform: uppercase;
  }
  &__btnToggleMenu {
    background-color: $bg-color-btn-toggle;
    height: $size-btn-toggle;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
    width: $size-btn-toggle;
    @extend .btn-reset;
    @include color("color", "grey-500");
  }
  &__btnicon {
    transition: transform .3s;

    &--opened {
      transform: rotate(180deg);
    }
  }
}
</style>
