<template>
  <Navbar />
  <!-- <div id="content"></div> -->
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
</style>
