<template>
  <div class="user-info">
    <header class="user-info__header">
      <div class="user-info__user">
        <UserStars />
        <span class="user-info__name">{{userName}}</span>
      </div>
      <button
        @click="toggleShowMoviesOverview"
        type="button"
        class="user-info__btn"
      >
        <BaseIcon name="arrow" width="12" height="12" />
      </button>
    </header>
    <BaseProgressBar :progress="userProgreesBarValue" />
  </div>
</template>

<script>
import BaseProgressBar from '@/components/BaseProgressBar.vue';
import UserStars from '@/components/UserStars.vue';

export default {
  components: {
    BaseProgressBar,
    UserStars,
  },
  data() {
    return {
      userName: this.$store.state.userName,
      userProgreesBarValue: this.$store.state.userProgreesBarValue,
    };
  },
  methods: {
    toggleShowMoviesOverview() {
      this.$store.commit('TOGGLE_MOVIES_OVERVIEW');
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  box-shadow: inset 0px -1px 0px rgba(255, 255, 255, .1);
  padding: 1rem 1.25rem;

  &__header {
    display: flex;
  }
  &__user {
    align-items: center;
    display: flex;
    flex: 1;
    margin-bottom: .5rem;
  }
  &__name {
    margin-left: .75rem;
  }
  &__btn {
    background-color: rgba(255, 255, 255, .1);
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
    transform: rotate(270deg);
    @extend .btn-reset;
    @include color("color", "grey-500");
  }
}
</style>
