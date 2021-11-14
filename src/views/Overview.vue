<template>
  <div class="container">
    <Banner />
    <NavPill />
    <CityDetail :scenicSpots="scenicSpots" />
    <ActivityDetail :activities="activities" />
  </div>
</template>

<script>
import getScenicSpots from "../composables/getScenicSpots";
import getActivities from "../composables/getActivities";
import Banner from "../components/Banner.vue";
import CityDetail from "../components/cityDetail.vue";
import ActivityDetail from "../components/ActivityDetail.vue";
import NavPill from "../components/NavPill.vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
export default {
  components: { Banner, CityDetail, NavPill, ActivityDetail },

  setup() {
    const route = useRoute();
    const { loadSpots, scenicSpots } = getScenicSpots(route.params.city);
    const { loadActivities, activities } = getActivities(route.params.city);

    loadSpots(route.params.city);
    loadActivities(route.params.city);

    onBeforeRouteUpdate(async (to, from, next) => {
      loadSpots(to.params.city);
      loadActivities(to.params.city);
      next();
    });

    return { scenicSpots, activities };
  },
};
</script>
