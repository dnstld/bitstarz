<template>
  <nav class="nav-bar">
    <ul class="nav-bar__list">
      <li class="nav-bar__item">
        <router-link
          to="/dashboard"
          class="nav-bar__link"
          :class="{ 'nav-bar__link--menuopened': isMenuOpened }"
        >
          <BaseIcon name="dashboard" />
          <template v-if="isMenuOpened">
            <span class="nav-bar__text">Dashboard</span>
          </template>
        </router-link>
      </li>
      <li class="nav-bar__item">
        <router-link
          to="/"
          class="nav-bar__link"
          :class="{ 'nav-bar__link--menuopened': isMenuOpened }"
        >
          <BaseIcon name="clock" />
          <template v-if="isMenuOpened">
            <span class="nav-bar__text">Menu Item</span>
          </template>
        </router-link>
      </li>
      <li class="nav-bar__item">
        <router-link
          to="/"
          class="nav-bar__link"
          :class="{ 'nav-bar__link--menuopened': isMenuOpened }"
        >
          <BaseIcon name="gift" />
          <template v-if="isMenuOpened">
            <span class="nav-bar__text">Menu Item</span>
          </template>
        </router-link>
      </li>
      <li class="nav-bar__item">
        <router-link
          to="/"
          class="nav-bar__link"
          :class="{ 'nav-bar__link--menuopened': isMenuOpened }"
        >
          <BaseIcon name="user" />
          <template v-if="isMenuOpened">
            <span class="nav-bar__text">Menu Item</span>
          </template>
        </router-link>
      </li>
      <li class="nav-bar__item">
        <router-link
          to="/"
          class="nav-bar__link"
          :class="{ 'nav-bar__link--menuopened': isMenuOpened }"
        >
          <BaseIcon name="megaphone" />
          <template v-if="isMenuOpened">
            <span class="nav-bar__text">Menu Item</span>
          </template>
        </router-link>
      </li>
    </ul>
  </nav>
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
$bg-color-link-active: rgba(255, 255, 255, .1);
$opacity-link-active: 1;
$opacity-link-hover: .9;
$opacity-link: .6;
$padding-link: 1rem;

.nav-bar {
  overflow-y: auto;

  &__link {
    align-items: center;
    display: flex;
    justify-content: center;
    opacity: $opacity-link;
    padding: $padding-link;
    text-decoration: none;
    user-select: none;
    transition: opacity .3s ease-in-out;
    @include color("color", "white");

    &--active {
      background-color: $bg-color-link-active;
      opacity: $opacity-link-active;
      cursor: default;
    }
    &--menuopened {
      justify-content: flex-start;
    }
    &:hover {
      opacity: $opacity-link-hover;
    }
  }
  &__text {
    margin-left: 1rem;
  }
}
</style>
