<template>
  <div class="banner">
    <div class="title">
      <h1>想去哪裡玩?</h1>
      <h3>這裡共有上千個活動及美食等著你去一同體驗</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 500px;
  background-image: url("../../src/assets/banner.png");
  background-size: cover;
  border: 1px solid black;
}
.title {
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
}
h1,
h3 {
  color: whitesmoke;
}
</style>