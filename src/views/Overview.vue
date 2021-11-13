<template>
  <div class="container">
    <Banner />
    <NavPill />
    <CityDetail :scenicSpot="scenicSpot" />
  </div>
</template>

<script>
import getScenicSpot from "../composables/getScenicSpot";
import Banner from "../components/Banner.vue";
import CityDetail from "../components/cityDetail.vue";
import NavPill from "../components/NavPill.vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export default {
  components: { Banner, CityDetail, NavPill },

  setup() {
    const route = useRoute();
    const { loadSpot, scenicSpot } = getScenicSpot(route.params.city);
    loadSpot(route.params.city);

    onBeforeRouteUpdate(async (to, from, next) => {
      loadSpot(to.params.city);
      next();
    });

    return { scenicSpot };
  },
};
</script>
