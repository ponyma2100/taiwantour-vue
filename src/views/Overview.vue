<template>
  <div class="container">
    <Banner />
    <NavPill />
    <CityDetail :scenicSpots="scenicSpots" />
    <ActivityDetail :activities="activities" />
    <RestaurantDetail :restaurants="restaurants" />
    <HotelDetail :hotels="hotels" />
  </div>
</template>

<script>
import getScenicSpots from "../composables/getScenicSpots";
import getActivities from "../composables/getActivities";
import getRestaurants from "../composables/getRestaurants";
import getHotels from "../composables/getHotels";
import Banner from "../components/Banner.vue";
import CityDetail from "../components/cityDetail.vue";
import ActivityDetail from "../components/ActivityDetail.vue";
import RestaurantDetail from "../components/RestaurantDetail.vue";
import HotelDetail from "../components/HotelDetail.vue";
import NavPill from "../components/NavPill.vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
export default {
  components: {
    Banner,
    NavPill,
    CityDetail,
    ActivityDetail,
    RestaurantDetail,
    HotelDetail,
  },

  setup() {
    const route = useRoute();
    const { loadSpots, scenicSpots } = getScenicSpots(route.params.city);
    const { loadActivities, activities } = getActivities(route.params.city);
    const { loadRestaurants, restaurants } = getRestaurants(route.params.city);
    const { loadHotels, hotels } = getHotels(route.params.city);

    loadSpots(route.params.city);
    loadActivities(route.params.city);
    loadRestaurants(route.params.city);
    loadHotels(route.params.city);

    onBeforeRouteUpdate(async (to, from, next) => {
      loadSpots(to.params.city);
      loadActivities(to.params.city);
      loadRestaurants(to.params.city);
      loadHotels(to.params.city);
      next();
    });

    return { scenicSpots, activities, restaurants, hotels };
  },
};
</script>
