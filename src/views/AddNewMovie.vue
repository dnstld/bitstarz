<template>
  <div class="add-new-movie">
    <header class="add-new-movie__header">
      <h1>Add New Movie</h1>
    </header>
    <form action="" class="add-new-movie__form">
      <BaseInput
        v-model="movieName"
        type="text"
        placeholder="Movie Name"
        class="add-new-movie__input"
      />
      <BaseInput
        v-model="movieYear"
        type="number"
        placeholder="Movie Year"
        class="add-new-movie__input"
      />

      <div class="add-new-movie__actions">
        <router-link to="/dashboard" tag="button" class="add-new-movie__btncancel">
          Cancel
        </router-link>
        <BaseButton primary large uppercase>
          Add Movie
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddNewMovie',
  data() {
    return {
      movieName: '',
      movieYear: '',
    };
  },
};
</script>

<style lang="scss" scoped>
$font-size-header: $text-18;
$padding-header: 1.5rem;

.add-new-movie {
  border-radius: 1rem;
  margin: 1rem;
  max-width: 420px;
  overflow: hidden;
  width: 100%;
  @include color("background-color", "white");

  &__header {
    font-size: $font-size-header;
    padding: $padding-header;
    text-align: center;
    text-transform: uppercase;
    @include color("color", "white");
    @include color("background-color", "grey-900");
  }
  &__form {
    padding: 1.5rem;
  }
  &__input {
    margin-bottom: 1.5rem;
  }
  &__actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  &__btncancel {
    @extend .btn;
    @extend .btn-bordered;
    @extend .btn-large;
    @extend .btn-uppercase;
  }
}
</style>
