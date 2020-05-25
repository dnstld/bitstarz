<template>
  <div class="base-icon">
    <svg class="base-icon__svg" :width="width" :height="height">
      <use v-bind="{'xlink:href':'/images/icons/sprite.svg#'+name}"></use>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-icon {
  align-items: center;
  display: inline-flex;
  font-size: inherit;
  color: inherit;

  &__svg {
    fill: currentColor;
  }
}
</style>
