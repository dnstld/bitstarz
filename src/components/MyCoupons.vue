<template>
  <ul class="my-coupons">
    <li v-for="(coupon, index) in coupons" :key="index" class="my-coupons__item">
      <div class="my-coupons__ticket">
        <img src="/images/ticket.svg" alt="Smilling Face" class="my-coupons__ticketsvg">
      </div>
      <div class="my-coupons__info">
        <span class="my-coupons__name">{{coupon.name}}</span>
        <span v-if="coupon.expires" class="my-coupons__expires">{{coupon.expires}}</span>
      </div>
      <BaseButton primary>
        Button
      </BaseButton>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      coupons: [
        {
          name: 'Get $5 Off on Purchase of "Fast6" Movie Tickets Code',
          expires: '',
        },
        {
          name: 'Prestige Movie Ticket',
          expires: '1d:5h:25m:55s',
        },
        {
          name: 'Get $5 Off on Purchase of "Fast6" Movie Tickets Code',
          expires: '1d:5h:25m:55s',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.my-coupons {
  &__item {
    display: flex;
    align-items: center;
    padding: 1rem;
  }
  &__ticket {
    width: 1.5rem;
  }
  &__ticketsvg {
    width: 100%;
  }
  &__info {
    display: flex;
    flex: 1;
    flex-direction: column;
    font-size: $text-14;
    font-weight: 500;
    margin: 0 1.5rem;
  }
  &__expires {
    font-size: $text-12;
    font-weight: 400;
    line-height: $text-14;
    margin-top: .25rem;
    @include color("color", "grey-700");
  }
}
</style>
