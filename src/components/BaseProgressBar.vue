<template>
  <div class="base-progress-bar">
    <span
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      class="base-progress-bar__progress"
      :style="{ transform: 'translateX(-'+ progressValue +'%)' }"
      :class="{'base-progress-bar__progress--dark':secondary}">
    </span>
  </div>
</template>

<script>
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
    transform: translateX(-100%);
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
