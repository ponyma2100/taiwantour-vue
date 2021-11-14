<template>
  <NavPill />
  <RestaurantCard :restaurants="restaurants" />
</template>

<script>
import NavPill from "../components/NavPill.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import getRestaurants from "../composables/getRestaurants";
import { useRoute } from "vue-router";

export default {
  components: { NavPill, RestaurantCard },

  setup() {
    const route = useRoute();
    const { loadRestaurants, restaurants } = getRestaurants(route.params.city);
    loadRestaurants(route.params.city, 30);

    return { restaurants };
  },
};
</script>

<style>
</style>