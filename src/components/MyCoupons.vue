<template>
  <ul class="my-coupons">
    <li v-for="(coupon, index) in coupons" :key="index" class="my-coupons__item">
      <div class="my-coupons__ticket">
        <img src="/images/ticket.svg" alt="Smilling Face" class="my-coupons__ticketsvg">
      </div>
      <div class="my-coupons__info">
        <span class="my-coupons__name">{{coupon.name}}</span>
        <span v-if="coupon.expires" class="my-coupons__expires">
          Expires:
          {{coupon.expires}}
        </span>
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
$bg-item: #fff;
$bg-item-hover: #FFF6DE;

.my-coupons {
  &__item {
    align-items: center;
    background: linear-gradient(
      60deg,
    $bg-item 40%,
    $bg-item-hover 40%,
    $bg-item-hover 60%,
    $bg-item 60%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 0;
    cursor: default;
    display: flex;
    padding: 1rem;
    transition: background-size .75s ease-in;

    &:hover {
      background-size: 900%;
    }
  }
  &__ticket {
    flex-shrink: 0;
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
    margin: 0 1rem;
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
