<template>
  <CityNavPill />
  <ActivityCard :activities="activities" />
</template>

<script>
import CityNavPill from "../components/CityNavPill.vue";
import ActivityCard from "../components/ActivityCard.vue";
import getActivities from "../composables/getActivities";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export default {
  components: { CityNavPill, ActivityCard },

  setup() {
    const route = useRoute();
    const { loadActivities, activities } = getActivities();
    loadActivities(route.params.city, 30);

    onBeforeRouteUpdate(async (to, from, next) => {
      loadActivities(to.params.city);
      next();
    });
    return { activities };
  },
};
</script>

<style>
</style>