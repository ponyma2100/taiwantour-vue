<template>
  <CityNavPill />
  <ScenicSpotCard :scenicSpots="scenicSpots" />
</template>

<script>
import CityNavPill from "../components/CityNavPill.vue";
import ScenicSpotCard from "../components/ScenicSpotCard.vue";
import getScenicSpots from "../composables/getScenicSpots";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export default {
  components: { CityNavPill, ScenicSpotCard },

  setup() {
    const route = useRoute();
    const { loadSpots, scenicSpots } = getScenicSpots(route.params.city);
    loadSpots(route.params.city, 30);

    onBeforeRouteUpdate(async (to, from, next) => {
      loadSpots(to.params.city);
      next();
    });
    return { scenicSpots };
  },
};
</script>

<style>
</style>