<template>
  <div class="home">
    <Banner />
    <NavPill />
    <ListView :scenicSpot="scenicSpot" />
  </div>
</template>

<script>
import getScenicSpot from "../composables/getScenicSpot";
import getRestaurant from "../composables/getRestaurant";
import getHotel from "../composables/getHotel";
import getActivity from "../composables/getActivity";
import Banner from "../components/Banner.vue";
import ListView from "../components/ListView.vue";
import NavPill from "../components/NavPill.vue";

export default {
  name: "Home",
  components: { Banner, ListView, NavPill },

  setup() {
    const { loadSpot, scenicSpot } = getScenicSpot();
    const { loadRestaurant, restaurant } = getRestaurant();
    const { loadHotel, hotel } = getHotel();
    const { loadActivity, activity } = getActivity();

    loadSpot();
    loadRestaurant();
    loadHotel();
    loadActivity();

    return { scenicSpot, restaurant, hotel, activity };
  },
};
</script>
