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
            <span class="nav-bar__text">Hurry Up</span>
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
            <span class="nav-bar__text">Be Nice</span>
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
            <span class="nav-bar__text">Your Profile</span>
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
    align-items: center;
    display: flex;
    justify-content: center;
    opacity: .6;
    padding: 1rem;
    text-decoration: none;
    user-select: none;
    transition: opacity .3s ease-in-out;
    @include color("color", "white");

    &--active {
      background-color: rgba(255, 255, 255, .1);
      opacity: 1;
      cursor: default;
    }
    &--menuopened {
      justify-content: flex-start;
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
