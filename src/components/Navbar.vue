<template>
  <div class="navbar">
    <nav>
      <div class="logo">
        <router-link :to="{ name: 'Home' }">
          <img src="../assets/taiwango.jpg" alt="taiwango" />
        </router-link>
      </div>
      <div class="links">
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
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.25rem;
  border: 1px solid black;
}
nav {
  display: flex;
  width: 100%;
  padding: 20px;
}
.links {
  display: flex;
  justify-content: space-around;
  width: 40%;
  margin: auto;
  font-weight: bolder;
}
</style>