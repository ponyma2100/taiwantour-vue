<template>
  <div class="container">
    <Banner />
    <NavPill />
    <ListView :scenicSpot="scenicSpot" />
  </div>
</template>

<script>
import getScenicSpot from "../composables/getScenicSpot";
import Banner from "../components/Banner.vue";
import ListView from "../components/ListView.vue";
import NavPill from "../components/NavPill.vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export default {
  components: { Banner, ListView, NavPill },

  setup() {
    const route = useRoute();
    const { loadSpot, scenicSpot } = getScenicSpot();

    onBeforeRouteUpdate(async (to, from, next) => {
      loadSpot(to.params.city);
      next();
    });

    return { scenicSpot };
  },
};
</script>
