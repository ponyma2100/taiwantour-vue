<template>
  <div class="home">
    <Banner />
    <NavPill />
    <ListView
      :scenicSpots="scenicSpots"
      :restaurants="restaurants"
      :hotels="hotels"
    />
  </div>
</template>

<script>
import getScenicSpots from "../composables/getScenicSpots";
import getRestaurants from "../composables/getRestaurants";
import getHotels from "../composables/getHotels";
import getActivities from "../composables/getActivities";
import Banner from "../components/Banner.vue";
import ListView from "../components/ListView.vue";
import NavPill from "../components/NavPill.vue";

export default {
  name: "Home",
  components: { Banner, ListView, NavPill },

  setup() {
    const { loadSpots, scenicSpots } = getScenicSpots();
    const { loadRestaurants, restaurants } = getRestaurants();
    const { loadHotels, hotels } = getHotels();
    const { loadActivities, activities } = getActivities();

    loadSpots();
    loadRestaurants();
    loadHotels("Taipei");
    loadActivities();

    return { scenicSpots, restaurants, hotels, activities };
  },
};
</script>