<template>
  <div class="base-progress-bar">
    <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
      <span
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        class="base-progress-bar__progress"
        :class="{'base-progress-bar__progress--dark':secondary}">
      </span>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  props: {
    progress: {
      type: Number,
      default: 0,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    progressValue() {
      return 100 - this.progress;
    },
  },
  methods: {
    beforeEnter(el) {
      // eslint-disable-next-line no-param-reassign
      el.style.transform = 'translateX(-100%)';
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 2,
        ease: 'power1.in',
        transform: `translateX(-${this.progressValue}%)`,
        onComplete: done,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.base-progress-bar {
  background-color: rgba(255, 255, 255, .1);
  border-radius: .12rem;
  height: .25rem;
  overflow: hidden;
  width: 100%;

  &__progress {
    display: block;
    height: 100%;
    @include color("background-color", "primary");

    &--dark {
      @include color("background-color", "grey-600");
    }
  }

  @media screen and (prefers-reduced-motion) {
    &__progress {
      transition: none;
    }
  }
}
</style>
