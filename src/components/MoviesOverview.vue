<template>
  <div class="movies-overview">
    <span class="movies-overview__total">{{totalMovies}}</span>
    <BaseProgressBar secondary :progress="totalMoviesProgressBarValue" />
    <div class="movies-overview__count">
      <div class="movies-overview__countinfo">
        <span class="movies-overview__counttotal">{{totalMoviesSeen}}</span>
        <span class="movies-overview__countdescription">Movies seen</span>
      </div>
      <div class="movies-overview__countinfo movies-overview__countinfo--right">
        <span class="movies-overview__counttotal">{{totalMoviesUntilNextLevel}}</span>
        <span class="movies-overview__countdescription">Movies untill next level</span>
      </div>
    </div>
    <div class="movies-overview__actions">
      <BaseButton secondary uppercase>
        Button
      </BaseButton>
      <BaseButton primary uppercase>
        Button
      </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalMovies: this.$store.state.totalMovies,
      totalMoviesSeen: this.$store.state.totalMoviesSeen,
      totalMoviesUntilNextLevel: this.$store.state.totalMoviesUntilNextLevel,
      totalMoviesProgressBarValue: this.$store.state.totalMoviesProgressBarValue,
    };
  },
};
</script>

<style lang="scss" scoped>
.movies-overview {
  display: grid;
  grid-row-gap: .5rem;
  padding: 1.25rem;

  &__total {
    display: block;
    font-size: $text-24;
    font-weight: 500;
  }
  &__count {
    display: flex;
    justify-content: space-between;
  }
  &__countinfo {
    display: flex;
    flex-direction: column;

    &--right {
      text-align: right;
    }
  }
  &__counttotal {
    font-size: $text-14;
    font-weight: 700;
    margin-bottom: .25rem;
  }
  &__countdescription {
    font-size: $text-12;
    @include color("color", "grey-300");
  }
  &__actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    margin-top: .75rem;
  }
}
</style>
