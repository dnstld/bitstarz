<template>
  <main class="dashboard-panel">
    <header class="dashboard-panel__header">
      <h1 class="dashboard-panel__title">Dashboard</h1>
    </header>

    <section class="dashboard-panel__card dashboard-panel__watched">
      <header class="dashboard-panel__cardheader">
        <h2 class="dashboard-panel__cardtitle">Movies Watched</h2>
        <button type="button" class="dashboard-panel__addmovie">Add New Movie</button>
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
        content
      </div>
    </section>

    <section class="dashboard-panel__card dashboard-panel__popular">
      <header class="dashboard-panel__cardheader">
        <h2 class="dashboard-panel__cardtitle">Popular Movies</h2>
      </header>
      <div class="dashboard-panel__cardcontent">
        content
      </div>
    </section>

    <section class="dashboard-panel__card dashboard-panel__random">
      <div class="dashboard-panel__cardcontent">
        <div class="dashboard-panel__emoji">
          <img src="/images/emoji.svg" alt="Smilling Face" class="dashboard-panel__emojisvg">
        </div>
        <span class="dashboard-panel__randomtitle">Just a random card</span>
        <p>Far far away, behind the word mountains,
          far from the countries Vokalia and Consonantia,
          there live the blind texts.</p>
      </div>
      <footer class="dashboard-panel__cardfooter">
        <BaseButton bordered large uppercase full>
          Click to flip the card
        </BaseButton>
      </footer>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      totalMovies: this.$store.state.totalMovies,
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard-panel {
  $root: &;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
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

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr 1fr;
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
      text-decoration: underline;
      @extend .btn-reset;
    }
    #{$root}__cardcontent {
      align-items: center;
      display: flex;
      font-size: $text-72;
      font-weight: 700;
      justify-content: center;
    }
  }
  &__totalmovies {

  }
  &__coupons {
    grid-area: coupons;
  }
  &__popular {
    grid-area: popular;
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
}
</style>
