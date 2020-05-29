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
$size: 1.5rem;
$font-size:  $text-14;
$font-weight: 700;

.user-starts {
  width: $size;
  position: relative;

  &::after {
    font-size: $font-size;
    font-weight: $font-weight;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    @include color("color", "text");
    content: attr(data-stars);
  }
  &__img {
    width: 100%;
  }
}
</style>
