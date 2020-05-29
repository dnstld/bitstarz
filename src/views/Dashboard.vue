<template>
  <div class="dashboard-panel">
    <header class="dashboard-panel__header">
      <h1 class="dashboard-panel__title">Dashboard</h1>
    </header>

    <section class="dashboard-panel__card dashboard-panel__watched">
      <header class="dashboard-panel__cardheader">
        <h2 class="dashboard-panel__cardtitle">Movies Watched</h2>
        <router-link to="/dashboard/add-new-movie" class="dashboard-panel__addmovie">
          Add New Movie
        </router-link>
      </header>
      <div class="dashboard-panel__cardcontent">
        {{totalMovies}}
      </div>
      <footer class="dashboard-panel__cardfooter">
        <BaseButton
          primary
          large
          uppercase
          full
          class="dashboard-panel__bigbutton"
        >
          Big Green Button
        </BaseButton>
      </footer>
    </section>

    <section class="dashboard-panel__card dashboard-panel__coupons">
      <header class="dashboard-panel__cardheader">
        <h2 class="dashboard-panel__cardtitle">My Coupons</h2>
      </header>
      <div class="dashboard-panel__cardcontent">
        <MyCoupons />
      </div>
    </section>

    <section class="dashboard-panel__card dashboard-panel__popular">
      <header class="dashboard-panel__cardheader">
        <h2 class="dashboard-panel__cardtitle">Popular Movies</h2>
      </header>
      <div class="dashboard-panel__cardcontent">
        <PopularMovies />
      </div>
    </section>

    <section class="dashboard-panel__card dashboard-panel__random">
      <div class="dashboard-panel__cardcontent">
        <RandomFlipCard :flipCard="this.isFlipCard" />
      </div>

      <footer class="dashboard-panel__cardfooter">
        <BaseButton
          bordered
          large
          uppercase
          full
          @click="handleFlipCard"
        >
          Click to flip the card
        </BaseButton>
      </footer>
    </section>

    <transition name="fade">
      <div
        v-if="isAddMovieModalOpen"
        @click.self="closeModal"
        class="dashboard-panel__modalbackdrop"
      >
        <router-view />
      </div>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap';
import PopularMovies from '@/components/PopularMovies.vue';
import MyCoupons from '@/components/MyCoupons.vue';
import RandomFlipCard from '@/components/RandomFlipCard.vue';

export default {
  name: 'Dashboard',
  mounted() {
    gsap.from('.dashboard-panel__card', {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: 'power1',
      stagger: 0.3,
    });
  },
  components: {
    PopularMovies,
    MyCoupons,
    RandomFlipCard,
  },
  data() {
    return {
      totalMovies: this.$store.state.totalMovies,
      isFlipCard: false,
    };
  },
  computed: {
    isAddMovieModalOpen() {
      return this.$route.name === 'AddNewMovie';
    },
  },
  methods: {
    closeModal() {
      this.$router.push({ name: 'Dashboard' });
    },
    handleFlipCard() {
      this.isFlipCard = !this.isFlipCard;
    },
  },
};
</script>

<style lang="scss" scoped>
$font-size-page-title: $text-24;
$font-size-sections-title: $text-13;
$font-weight-sections-title: 500;
$font-size-add-movie-button: $text-14;
$font-weight-add-movie-button: 500;
$font-size-total-movies-watched: $text-72;
$font-weight-total-movies-watched: 700;
$font-size-random-card: $text-14;
$height-mobile-random-card: 350px;
$bg-backdrop-modal: rgba(0, 0, 0, .6);

.dashboard-panel {
  $root: &;
  overflow-y: auto;
  width: 100%;
  padding: 1rem;
  position: relative;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto minmax(200px, 1fr) minmax(200px, 1fr);
    grid-gap: 1.5rem;
    height: 100%;
    padding: 1.5rem;
    grid-template-areas:
      "header header header"
      "watched coupons coupons"
      "watched popular random";
  }

  &__header {
    grid-area: header;
  }
  &__title {
    font-size: $font-size-page-title;
  }
  &__card {
    background: white;
    background:
      linear-gradient(135deg, transparent 10px, white 0) top left,
      linear-gradient(225deg, transparent 10px, white 0) top right,
      linear-gradient(315deg, transparent 10px, white 0) bottom right,
      linear-gradient(45deg,  transparent 10px, white 0) bottom left;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    box-shadow: 0px 12px 14px rgba(0, 0, 0, .05);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    box-sizing: border-box;
    margin-top: 1rem;

    @media (min-width: 1200px) {
      margin-top: 0;
    }
  }
  &__cardtitle {
    font-size: $font-size-sections-title;
    font-weight: $font-weight-sections-title;
    text-transform: uppercase;
    @include color("color", "grey-700");
  }
  &__cardcontent {
    flex: 1;
    overflow-y: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  &__watched {
    grid-area: watched;

    #{$root}__cardheader {
      display: flex;
      justify-content: space-between;
    }
    #{$root}__addmovie {
      background-color: transparent;
      font-size: $font-size-add-movie-button;
      font-weight: $font-weight-add-movie-button;
      @include color("color", "text");
    }
    #{$root}__cardcontent {
      align-items: center;
      display: flex;
      font-size: $font-size-total-movies-watched;
      font-weight:  $font-weight-total-movies-watched;
      justify-content: center;
    }
    #{$root}__bigbutton {
      will-change: transform;
      animation: shakeBigGreenButton 5s ease 2s infinite;
    }
  }
  &__coupons {
    grid-area: coupons;

    #{$root}__cardcontent {
      margin-bottom: -1rem;
      margin-left: -1rem;
      margin-right: -1rem;
    }
  }
  &__popular {
    grid-area: popular;
    max-height: 300px;

    @media (min-width: 1200px) {
      max-height: 100%;
    }

    #{$root}__cardcontent {
      margin-bottom: -1rem;
      margin-left: -1rem;
      margin-right: -1rem;
    }
  }
  &__random {
    #{$root}__cardcontent {
      align-items: center;
      display: flex;
      font-size: $font-size-random-card;
      line-height: 150%;
      height: $height-mobile-random-card;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      @include color("color", "grey-700");

      @media (min-width: 1200px) {
        height: auto;
      }
    }
  }
  &__modalbackdrop {
    align-items: center;
    background-color: $bg-backdrop-modal;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    will-change: auto;

    @media (min-width: 1200px) {
      position: absolute;
    }
  }
}
@keyframes shakeBigGreenButton {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  2% {
    transform: translate(1px, 1px) rotate(1deg);
  }
  4% {
    transform: translate(-1px, -1px) rotate(-1deg);
  }
  6% {
    transform: translate(2px, -1px) rotate(2deg);
  }
  8% {
    transform: translate(-1px, 1px) rotate(1deg);
  }
  10% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }
}
</style>
