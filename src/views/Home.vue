<template>
  <div class="home">
    <Banner />
    <ListView :scenicSpot="scenicSpot" />
  </div>
</template>

<script>
import getScenicSpot from "../composables/getScenicSpot";
import Banner from "../components/Banner.vue";
import ListView from "../components/ListView.vue";

export default {
  name: "Home",
  components: { Banner, ListView },

  setup() {
    const { loadSpot, scenicSpot } = getScenicSpot();

    loadSpot();
    return { scenicSpot };
  },
};
</script>
