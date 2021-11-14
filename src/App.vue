<template>
  <Navbar />
  <div id="content">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
#content {
  margin-top: 4.25rem;
}
</style>
