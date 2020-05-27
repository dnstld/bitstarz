<template>
  <button
    :type="type"
    :class="{
      'btn-primary': primary,
      'btn-secondary': secondary,
      'btn-bordered': bordered,
      'btn-uppercase': uppercase,
      'btn-large': large,
      'btn-full': full,
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
    uppercase: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
