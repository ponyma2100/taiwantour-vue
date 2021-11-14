<template>
  <footer>
    <div class="logo">
      <img src="../assets/taiwango.png" alt="taiwango" />
    </div>
    <div class="links">
      <router-link :to="{ name: 'ScenicSpot', params: { city: 'Taipei' } }"
        >熱門景點</router-link
      >
      <router-link :to="{ name: 'Activity', params: { city: 'Taipei' } }"
        >特色活動</router-link
      >
      <router-link :to="{ name: 'Restaurant', params: { city: 'Taipei' } }"
        >美食饗宴</router-link
      >
      <router-link :to="{ name: 'Hotel', params: { city: 'Taipei' } }"
        >精選住宿</router-link
      >
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #333333;
  width: 100%;
  height: 234px;
  margin-top: 30px;
}
.links {
  display: flex;
  justify-content: space-around;
  width: 40%;
}
.link a {
  color: #b3b3b3;
}
a:hover {
  color: #b3b3b3;
}
</style>