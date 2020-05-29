<template>
  <button class="base-tooltip" aria-labelledby="tooltip">
    <slot></slot>
    <div role="tooltip" id="tooltip" class="base-tooltip__content">
      {{text}}
      <span class="base-tooltip__arrow"></span>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$radius: .25rem;
$font-size: $text-18;

.base-tooltip {
  $root: &;
  background-color: transparent;
  cursor: default;
  display: inline-block;
  position: relative;
  @extend .btn-reset;

  &:focus {
    outline: none;
  }
  &:hover {
    #{$root}__content {
      opacity: 1;
      visibility: visible;
    }
  }
  &__content {
    border-radius: $radius;
    border: 1px solid;
    box-sizing: border-box;
    font-size: $font-size;
    font-weight: normal;
    left: 100%;
    margin-left: .5rem;
    opacity: 0;
    padding: .25rem 1.5rem;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    transition: opacity .8s;
    visibility: hidden;
    z-index: 100;
    @include color("background-color", "grey-500");
    @include color("color", "black");
    @include color("border-color", "grey-700");
  }
  &__arrow {
    height: 24px;
    margin-top: -12px;
    overflow: hidden;
    position: absolute;
    right: 100%;
    top: 50%;
    width: 12px;

    &::after {
      border: 1px solid;
      content:'';
      height: .75rem;
      left: 0;
      position:absolute;
      top: 50%;
      transform: translate(50%, -50%) rotate(-45deg);
      width: .75rem;
      @include color("background-color", "grey-500");
      @include color("border-color", "grey-700");
    }
  }
}
</style>
