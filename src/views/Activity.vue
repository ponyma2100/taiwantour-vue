<template>
  <NavPill />
  <ActivityCard :activities="activities" />
</template>

<script>
import NavPill from "../components/NavPill.vue";
import ActivityCard from "../components/ActivityCard.vue";
import getActivities from "../composables/getActivities";
import { useRoute } from "vue-router";

export default {
  components: { NavPill, ActivityCard },

  setup() {
    const route = useRoute();
    const { loadActivities, activities } = getActivities();
    loadActivities(route.params.city, 30);

    return { activities };
  },
};
</script>

<style>
</style>