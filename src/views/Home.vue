<template>
  <div class="home">
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

export default {
  name: "Home",
  components: { Banner, ListView, NavPill },

  setup() {
    const { loadSpot, scenicSpot } = getScenicSpot();

    loadSpot();
    return { scenicSpot };
  },
};
</script>
