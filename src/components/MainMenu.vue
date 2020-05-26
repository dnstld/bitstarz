<template>
  <div class="main-menu">
    <NavHeader />
    <AccountOverview />
    <NavBar />
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue';
import AccountOverview from '@/components/AccountOverview.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavHeader,
    AccountOverview,
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
$min-width: 90px;
$max-width: 262px;

.main-menu {
  @include color("background-color", "grey-900");
  @include color("color", "white");
  width: 100%;
  max-width: $max-width;
  overflow-y: auto;
}
</style>
