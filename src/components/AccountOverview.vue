<template>
  <section class="account-overview" :class="{ 'account-overview--opened':isMenuOpened }">
    <div v-if="isMenuOpened" class="account-overview__details account-overview__full">
      <UserInfo />
      <MoviesOverview v-if="isShowOverview" />
    </div>
    <div v-else class="account-overview__details account-overview__narrow">
      <div class="account-overview__narrowitem">
        <UserStars />
      </div>
      <div class="account-overview__narrowitem">
        <BaseTooltip :text="totalMovies">
          <BaseIcon name="movie" />
        </BaseTooltip>
      </div>
      <div class="account-overview__narrowitem">
        <BaseButton primary>
          <BaseIcon name="plus" />
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue';
import MoviesOverview from '@/components/MoviesOverview.vue';
import UserStars from '@/components/UserStars.vue';

export default {
  components: {
    UserInfo,
    MoviesOverview,
    UserStars,
  },
  data() {
    return {
      showOverview: this.$store.state.isMenuOpened,
      isMoviesOverviewOpened: this.$store.state.isMoviesOverviewOpened,
      totalMovies: this.$store.state.totalMovies,
    };
  },
  computed: {
    isMenuOpened() {
      return this.$store.state.isMenuOpened;
    },
    isShowOverview() {
      return this.$store.state.isMoviesOverviewOpened && this.isMenuOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
$overview-height: 15rem;

.account-overview {
  background-color: rgba(255, 255, 255, 0);

  &--opened {
    background-color: rgba(255, 255, 255, .05);
  }
  &__narrow {
    display: grid;
    height: $overview-height;
  }
  &__narrowitem {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
