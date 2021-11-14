<template>
  <div class="home">
    <Banner />
    <NavPill />
    <ListView :scenicSpot="scenicSpot" :restaurants="restaurants" />
  </div>
</template>

<script>
import getScenicSpot from "../composables/getScenicSpot";
import getRestaurants from "../composables/getRestaurants";
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
    const { loadRestaurants, restaurants } = getRestaurants();
    const { loadHotel, hotel } = getHotel();
    const { loadActivity, activity } = getActivity();

    loadSpot();
    loadRestaurants();
    console.log(
      "🚀 ~ file: Home.vue ~ line 30 ~ setup ~ loadRestaurants()",
      loadRestaurants()
    );
    loadHotel();
    loadActivity();

    return { scenicSpot, restaurants, hotel, activity };
  },
};
</script>
