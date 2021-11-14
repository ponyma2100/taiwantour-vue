<template>
  <CityNavPill />
  <HotelCard :hotels="hotels" />
</template>

<script>
import CityNavPill from "../components/CityNavPill.vue";
import HotelCard from "../components/HotelCard.vue";
import getHotels from "../composables/getHotels";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export default {
  components: { CityNavPill, HotelCard },

  setup() {
    const route = useRoute();
    const { loadHotels, hotels } = getHotels(route.params.city);
    loadHotels(route.params.city, 30);
    onBeforeRouteUpdate(async (to, from, next) => {
      loadHotels(to.params.city);
      next();
    });
    return { hotels };
  },
};
</script>

<style>
</style>