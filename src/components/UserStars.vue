<template>
  <div :data-stars="userTotalStars" class="user-starts">
    <img src="/images/star.svg" alt="" class="user-starts__img">
  </div>
</template>

<script>
export default {
  data() {
    return {
      userTotalStars: this.$store.state.userTotalStars,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-starts {
  width: 1.5rem;
  position: relative;

  &::after {
    @include color("color", "text");
    content: attr(data-stars);
    font-size: $text-14;
    font-weight: 700;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  &__img {
    width: 100%;
  }
}
</style>
