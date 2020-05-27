<template>
  <ul class="popular-movies">
    <li v-for="(movie, index) in movies" :key="index" class="popular-movies__item">
      <img :src="movie.cover" :alt="movie.name" class="popular-movies__cover">
      <div class="popular-movies__description">
        <span>{{movie.name}}</span>
        <span class="popular-movies__year">{{movie.year}}</span>
      </div>
      <button type="button" class="popular-movies__btn"></button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        {
          name: 'Dangerous Lies',
          year: 2020,
          cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSizSEoIy6ov8PQK3D3bl0UAn9zMx1wzPeGi9VTZBgQKp6xysc7&usqp=CAU',
        },
        {
          name: 'The Godfather',
          year: 1972,
          cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQip7hKYbQbGO6dv-THwns_qkDOx7w-TudBZP1Fq2CYTCsF1pIm&usqp=CAU',
        },
        {
          name: 'The Dark Knight',
          year: 2008,
          cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCfplBwGrLjH8gKrl28xtaTiNeeJ8kGcH7e4cjkYDbVHvCxhmd&usqp=CAU',
        },
        {
          name: 'Schindler\'s List',
          year: 1993,
          cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKCCTVzC-rVavTU64NpvntpNLL6YDzM7FICwCR7zcPlRZjgcy-&usqp=CAU',
        },
        {
          name: 'Pulp Fiction',
          year: 1994,
          cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB5FN-O7x03qttw2amHI6LhQUWL0oVcj1xKPDJRPVjPs1kFIEO&usqp=CAU',
        },
        {
          name: 'Clockwork Orange',
          year: 1971,
          cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwTDBz7DB7humFWfWUcc7DbicZgHBUOZHyD_ix4fr11mKUMU5T&usqp=CAU',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.popular-movies {
  &__item {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    transition: background-color .3s ease-in;

    &:hover {
      @include color("background-color", "grey-200");
    }
  }
  &__cover {
    width: 90px;
    height: 48px;
    object-fit: cover;
  }
  &__description {
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: $text-14;
    font-weight: 500;
    margin: 0 1rem;
  }
  &__year{
    font-size: $text-12;
    font-weight: 400;
    line-height: $text-14;
    margin-top: .25rem;
    @include color("color", "grey-700");
  }
  &__btn {
    border-radius: 50%;
    height: 2rem;
    position: relative;
    width: 2rem;
    @extend .btn-reset;

    &::after {
      border-bottom: 6px solid transparent;
      border-top: 6px solid transparent;
      border-left: 10px solid;
      content: "";
      height: 0;
      width: 0;
      @include color("border-left-color", "grey-700");
    }
  }
}
</style>
