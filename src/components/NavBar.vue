<template>
  <nav class="nav-bar">
    <ul class="nav-bar__list">
      <li class="nav-bar__item">
        <router-link to="/dashboard" class="nav-bar__link">
          <BaseIcon name="dashboard" />
          <template v-if="isMenuOpened">
            <span class="nav-bar__text">Dashboard</span>
          </template>
        </router-link>
      </li>
      <li class="nav-bar__item">
        <router-link to="/" class="nav-bar__link">
          <BaseIcon name="clock" />
          <template v-if="isMenuOpened">
            <span class="nav-bar__text">Hurry Up</span>
          </template>
        </router-link>
      </li>
      <li class="nav-bar__item">
        <router-link to="/" class="nav-bar__link">
          <BaseIcon name="gift" />
          <template v-if="isMenuOpened">
            <span class="nav-bar__text">Be Nice</span>
          </template>
        </router-link>
      </li>
      <li class="nav-bar__item">
        <router-link to="/" class="nav-bar__link">
          <BaseIcon name="user" />
          <template v-if="isMenuOpened">
            <span class="nav-bar__text">Your Profile</span>
          </template>
        </router-link>
      </li>
      <li class="nav-bar__item">
        <router-link to="/" class="nav-bar__link">
          <BaseIcon name="megaphone" />
          <template v-if="isMenuOpened">
            <span class="nav-bar__text"></span>
            Speak Louder
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
.nav-bar {
  &__link {
    @include color("color", "white");
    align-items: center;
    display: flex;
    opacity: .6;
    padding: 1rem;
    text-decoration: none;
    user-select: none;
    transition: opacity .3s ease-in-out;

    &--active {
      opacity: 1;
      cursor: default;
    }
    &:hover {
      opacity: .9;
    }
  }
  &__text {
    margin-left: 1rem;
  }
}
</style>
