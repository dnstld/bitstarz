<template>
  <div class="dashboard-panel">
    <header class="dashboard-panel__header">
      <h1 class="dashboard-panel__title">Dashboard</h1>
    </header>
    <section class="dashboard-panel__watched">Movies Watched</section>
    <section class="dashboard-panel__coupons">My Coupons</section>
    <section class="dashboard-panel__popular">Popular Movies</section>
    <section class="dashboard-panel__card">Just a random card</section>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style lang="scss" scoped>
.dashboard-panel {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  grid-row-gap: 1rem;
  grid-template-areas:
    "header"
    "watched"
    "coupons"
    "popular"
    "card";
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
      "watched popular card";
  }

  &__header {
    grid-area: header;
  }
  &__title {
    font-size: $text-24;
  }
  &__watched {
    grid-area: watched;
    border: 1px solid;
  }
  &__coupons {
    grid-area: coupons;
    border: 1px solid;
  }
  &__popular {
    grid-area: popular;
    border: 1px solid;
  }
  &__card {
    grid-area: card;
    border: 1px solid;
  }
}
</style>
