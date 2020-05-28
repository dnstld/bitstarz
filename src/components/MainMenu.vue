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
.main-menu {
  flex-shrink: 0;
  @include color("background-color", "grey-900");
  @include color("color", "white");
}
</style>
