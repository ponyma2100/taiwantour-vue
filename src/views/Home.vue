<template>
  <div class="home">
    <Banner />
  </div>
</template>

<script>
import getScenicSpot from "../composables/getScenicSpot";
import Banner from "../components/Banner.vue";
export default {
  name: "Home",
  components: { Banner },
};
</script>
