<template>
  <div class="flip-card">
    <div class="flip-card__inner" :class="{ 'flip-card__inner--flip': flipCard }">
      <div class="flip-card__front">
        <div class="flip-card__emoji">
          <img src="/images/emoji.svg" alt="Smilling Face" class="flip-card__emojisvg">
        </div>
        <span class="flip-card__randomtitle">Just a random card</span>
        <p>Far far away, behind the word mountains,
          far from the countries Vokalia and Consonantia,
          there live the blind texts.</p>
      </div>
      <div class="flip-card__back">
        <p>#bitstarz</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flipCard: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.flip-card {
  background-color: transparent;
  height: 100%;
  perspective: 1000px;
  width: 100%;

  &__inner {
    align-items: center;
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    &--flip {
      transform: rotateY(180deg);
    }
  }
  &__front,
  &__back {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    @include color("background-color", "white");
  }
  &__back {
    transform: rotateY(180deg);
    @include color("background-color", "grey-200");
    @include color("color", "grey-800");
  }
}
</style>
