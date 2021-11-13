<template>
  <div class="nav-container">
    <h1>縣市快選</h1>
    <ul class="nav-tabs">
      <li class="nav-item">
        <div class="circle">
          <img src="../assets/north.png" alt="north" />
        </div>
        <p>北部</p>
        <div class="active"></div>
      </li>
      <li class="nav-item">中部</li>
      <li class="nav-item">南部</li>
      <li class="nav-item">東部</li>
      <li class="nav-item">離島</li>
    </ul>
    <ul class="nav-pills">
      <li class="nav-item" @click="handleClick('台北市')">
        <router-link :to="{ name: 'Overview', params: { city: 'Taipei' } }"
          >台北市</router-link
        >
        <div class="active"></div>
      </li>
      <li class="nav-item" @click="handleClick('新北市')">
        <router-link :to="{ name: 'Overview', params: { city: 'NewTaipei' } }"
          >新北市</router-link
        >
      </li>
      <li class="nav-item">
        <p>基隆市</p>
      </li>
      <li class="nav-item">
        <p>新竹市</p>
      </li>
      <li class="nav-item">
        <p>桃園市</p>
      </li>
      <li class="nav-item">
        <p>新竹縣</p>
      </li>
      <li class="nav-item">
        <p>宜蘭縣</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    const handleClick = (select) => {
      console.log(select);
    };

    return { handleClick };
  },
};
</script>

<style scoped>
.nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #f6f6f6;
}
ul {
  display: flex;
  list-style: none;
}

.nav-tabs > .nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 123px;
  height: 151px;
  left: 339px;
  top: 344px;
  background: #ffffff;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.12);
  border-radius: 15px;
  margin: 1rem;
}
.circle {
  width: 76px;
  height: 76px;
  left: 362px;
  top: 366px;
  background: linear-gradient(155.4deg, #78e389 0.2%, #1eb893 90.81%);
  border-radius: 50%;
}
.circle img {
  position: relative;
  left: 12px;
  top: 8px;
}
.active {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #c2c2c2;
}
.nav-pills {
  display: flex;
  padding: 20px;
}
.nav-pills > .nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  height: 40px;
  width: 87px;
}

.nav-pills > .nav-item > .active {
  width: 13px;
  height: 4px;
  background: #10cc9f;
  border-radius: 2.5px;
}
.nav-pills > .nav-item:hover {
  width: 87px;
  height: 40px;
  background: #ffffff;
  border-radius: 76px;
}
</style>