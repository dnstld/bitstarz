<template>
  <section class="account-overview" :class="{ 'account-overview--opened':isMenuOpened }">
    <div v-if="isMenuOpened" class="account-overview__details account-overview__full">
      <UserInfo />
      <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
        <MoviesOverview v-if="isShowOverview" />
      </transition>
    </div>
    <div v-else class="account-overview__details account-overview__narrow">
      <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
        <div class="account-overview__narrowitem">
          <UserStars />
        </div>
      </transition>
      <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
        <div class="account-overview__narrowitem">
          <BaseTooltip :text="totalMovies">
            <BaseIcon name="movie" />
          </BaseTooltip>
        </div>
      </transition>
      <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
        <div class="account-overview__narrowitem">
          <BaseButton primary>
            <BaseIcon name="plus" />
          </BaseButton>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue';
import MoviesOverview from '@/components/MoviesOverview.vue';
import UserStars from '@/components/UserStars.vue';
import gsap from 'gsap';

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
  methods: {
    /* eslint-disable no-param-reassign */
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(-50px)';
    },
    enter(el, done) {
      gsap.to(el, {
        delay: 0.3,
        duration: 0.3,
        opacity: 1,
        scale: 1,
        y: 0,
        ease: 'power1',
        stagger: 0.3,
        onComplete: done,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$bg-color: rgba(255, 255, 255, 0);
$bg-color-opened: rgba(255, 255, 255, .05);
$height-narrowed: 15rem;

.account-overview {
  background-color: $bg-color;

  &--opened {
    background-color: $bg-color-opened;
  }
  &__narrow {
    display: grid;
    height: $height-narrowed;
  }
  &__narrowitem {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
