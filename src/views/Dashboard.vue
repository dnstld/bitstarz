<template>
  <main class="dashboard-panel">
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
        <BaseButton primary large uppercase full>
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
        <FlipCard :flipCard="this.isFlipCard" />
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
  </main>
</template>

<script>
import gsap from 'gsap';
import PopularMovies from '@/components/PopularMovies.vue';
import MyCoupons from '@/components/MyCoupons.vue';
import FlipCard from '@/components/FlipCard.vue';

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
    FlipCard,
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
.dashboard-panel {
  $root: &;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto minmax(250px, min-content);
  grid-row-gap: 1rem;
  grid-template-areas:
    "header"
    "watched"
    "coupons"
    "popular"
    "random";
  overflow-y: auto;
  width: 100%;
  padding: 1rem;
  position: relative;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto minmax(200px, 1fr) minmax(200px, 1fr);
    grid-gap: 1.5rem;
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
    font-size: $text-24;
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
  }
  &__cardtitle {
    font-size: $text-13;
    font-weight: 500;
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
      font-size: $text-14;
      font-weight: 500;
      @include color("color", "text");
    }
    #{$root}__cardcontent {
      align-items: center;
      display: flex;
      font-size: $text-72;
      font-weight: 700;
      justify-content: center;
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
      font-size: $text-14;
      line-height: 150%;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      @include color("color", "grey-700");
    }
    #{$root}__emoji {
      margin-bottom: 1.5rem;
      width: 2.25rem;
    }
    #{$root}__emojisvj {
      width: 100%;
    }
    #{$root}__randomtitle {
      font-size: $text-20;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }
  }
  &__modalbackdrop {
    align-items: center;
    background-color: rgba(0, 0, 0, .6);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
