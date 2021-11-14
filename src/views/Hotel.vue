<template>
  <NavPill />
  <HotelCard :hotels="hotels" />
</template>

<script>
import NavPill from "../components/NavPill.vue";
import HotelCard from "../components/HotelCard.vue";
import getHotels from "../composables/getHotels";
import { useRoute } from "vue-router";

export default {
  components: { NavPill, RestaurantCard },

  setup() {
    const route = useRoute();
    const { loadHotels, hotels } = getHotels(route.params.city);
    loadHotels(route.params.city, 30);

    return { hotels };
  },
};
</script>

<style>
</style>