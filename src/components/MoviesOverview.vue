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
$padding-section: 1.25rem;
$gap-between-info: .5rem;
$font-size-total: $text-24;
$font-weight-total: 500;
$font-size-total-count: $text-14;
$font-weight-total-count: 700;
$margin-bottom-total-count: .25rem;
$font-size-total-count-description: $text-12;
$gap-actions-btn: 1rem;
$margin-top-actions-btn: .75rem;

.movies-overview {
  display: grid;
  grid-row-gap: $gap-between-info;
  padding: $padding-section;

  &__total {
    display: block;
    font-size: $font-size-total;
    font-weight: $font-weight-total;
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
    font-size: $font-size-total-count;
    font-weight: $font-weight-total-count;
    margin-bottom: $margin-bottom-total-count;
  }
  &__countdescription {
    font-size: $font-size-total-count-description;
    @include color("color", "grey-300");
  }
  &__actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: $gap-actions-btn;
    margin-top: $margin-top-actions-btn;
  }
}
</style>
