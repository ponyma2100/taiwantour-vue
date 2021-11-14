<template>
  <div class="container">
    <Banner />
    <NavPill />
    <CityDetail :scenicSpots="scenicSpots" />
  </div>
</template>

<script>
import getScenicSpots from "../composables/getScenicSpots";
import Banner from "../components/Banner.vue";
import CityDetail from "../components/cityDetail.vue";
import NavPill from "../components/NavPill.vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export default {
  components: { Banner, CityDetail, NavPill },

  setup() {
    const route = useRoute();
    const { loadSpots, scenicSpots } = getScenicSpots(route.params.city);
    loadSpots(route.params.city);

    onBeforeRouteUpdate(async (to, from, next) => {
      loadSpots(to.params.city);
      next();
    });

    return { scenicSpots };
  },
};
</script>
