<template>
  <div class="base-input">
    <input
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      class="base-input__field"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;

  &__field {
    border: 1px solid;
    border-radius: .5rem;
    box-sizing: border-box;
    font-size: $text-14;
    padding: 1rem;
    width: inherit;
    @include color("background-color", "grey-200");
    @include color("border-color", "grey-300");
    @include color("color", "grey-700");
  }
}
</style>
