<template>
  <CityNavPill />
  <RestaurantCard :restaurants="restaurants" />
</template>

<script>
import CityNavPill from "../components/CityNavPill.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import getRestaurants from "../composables/getRestaurants";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export default {
  components: { CityNavPill, RestaurantCard },

  setup() {
    const route = useRoute();
    const { loadRestaurants, restaurants } = getRestaurants(route.params.city);
    loadRestaurants(route.params.city, 30);

    onBeforeRouteUpdate(async (to, from, next) => {
      loadRestaurants(to.params.city);
      next();
    });
    return { restaurants };
  },
};
</script>

<style>
</style>