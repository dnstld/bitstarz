<template>
  <button
    :type="type"
    :class="{
      'btn-primary': primary,
      'btn-secondary': secondary,
      'btn-bordered': bordered,
      'btn-lg': large,
    }"
    class="btn"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
