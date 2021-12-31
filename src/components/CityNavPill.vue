<template>
  <div class="nav-container">
    <h1>縣市快選</h1>
    <ul class="nav-tabs">
      <li class="nav-item" @click="toggleShowNorthern">
        <div class="circle">
          <img src="../assets/north.png" alt="northern" />
        </div>
        <p>北部</p>
        <div
          :class="{ active: isArea === 'north' }"
          v-show="isArea === 'north'"
        ></div>
      </li>
      <li class="nav-item" @click="toggleShowCentral">
        <div class="circle">
          <img src="../assets/north.png" alt="central" />
        </div>
        <p>中部</p>
        <div
          :class="{ active: isArea === 'central' }"
          v-show="isArea === 'central'"
        ></div>
      </li>
      <li class="nav-item" @click="toggleShowSouthern">
        <div class="circle">
          <img src="../assets/north.png" alt="southern" />
        </div>
        <p>南部</p>
        <div
          :class="{ active: isArea === 'southern' }"
          v-show="isArea === 'southern'"
        ></div>
      </li>
      <li class="nav-item" @click="toggleShowEastern">
        <div class="circle">
          <img src="../assets/north.png" alt="eastern" />
        </div>
        <p>東部</p>
        <div
          :class="{ active: isArea === 'eastern' }"
          v-show="isArea === 'eastern'"
        ></div>
      </li>
      <li class="nav-item" @click="toggleShowOffshore">
        <div class="circle">
          <img src="../assets/north.png" alt="offshore" />
        </div>
        <p>離島</p>
        <div
          :class="{ active: isArea === 'offshore' }"
          v-show="isArea === 'offshore'"
        ></div>
      </li>
    </ul>

    <ul class="nav-pills-northern" v-show="isArea === 'north'">
      <li
        class="nav-item"
        v-for="city in cityName.northern"
        :key="city.cityName"
      >
        <router-link
          :to="{ name: routerName, params: { city: city.engName } }"
          >{{ city.chtName }}</router-link
        >
      </li>
    </ul>
    <ul class="nav-pills-northern" v-show="isArea === 'central'">
      <li
        class="nav-item"
        v-for="city in cityName.central"
        :key="city.cityName"
      >
        <router-link
          :to="{ name: routerName, params: { city: city.engName } }"
          >{{ city.chtName }}</router-link
        >
      </li>
    </ul>
    <ul class="nav-pills-northern" v-show="isArea === 'southern'">
      <li
        class="nav-item"
        v-for="city in cityName.southern"
        :key="city.cityName"
      >
        <router-link
          :to="{ name: routerName, params: { city: city.engName } }"
          >{{ city.chtName }}</router-link
        >
      </li>
    </ul>
    <ul class="nav-pills-northern" v-show="isArea === 'eastern'">
      <li
        class="nav-item"
        v-for="city in cityName.eastern"
        :key="city.cityName"
      >
        <router-link
          :to="{ name: routerName, params: { city: city.engName } }"
          >{{ city.chtName }}</router-link
        >
      </li>
    </ul>
    <ul class="nav-pills-northern" v-show="isArea === 'offshore'">
      <li
        class="nav-item"
        v-for="city in cityName.offshore"
        :key="city.cityName"
      >
        <router-link
          :to="{ name: routerName, params: { city: city.engName } }"
          >{{ city.chtName }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import cityName from "../../data/cityData";
import { useRoute } from "vue-router";

export default {
  setup() {
    const isShowNorthern = ref(false);
    const isShowCentral = ref(false);
    const isShowSouthern = ref(false);
    const isShowEastern = ref(false);
    const isShowOffshore = ref(false);
    const route = useRoute();
    const routerName = ref();
    const area = ref([]);
    const isArea = ref("");
    routerName.value = route.name;
    area.value = ["北部", "中部", "南部", "東部", "離島"];

    const toggleShowNorthern = () => {
      isArea.value = "north";
    };
    const toggleShowCentral = () => {
      isArea.value = "central";
    };
    const toggleShowSouthern = () => {
      isArea.value = "southern";
    };
    const toggleShowEastern = () => {
      isArea.value = "eastern";
    };
    const toggleShowOffshore = () => {
      isArea.value = "offshore";
    };
    return {
      toggleShowNorthern,
      toggleShowCentral,
      toggleShowSouthern,
      toggleShowEastern,
      toggleShowOffshore,
      isShowNorthern,
      isShowCentral,
      isShowSouthern,
      isShowEastern,
      isShowOffshore,
      cityName,
      routerName,
      area,
      isArea,
    };
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
  cursor: pointer;
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
.nav-pills-northern {
  display: flex;
  padding: 20px;
}
.nav-pills-northern > .nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  height: 40px;
  width: 87px;
}

a.router-link-active {
  border-bottom: 2px solid #10cc9f;
}
.nav-pills-northern > .nav-item:hover {
  width: 87px;
  height: 40px;
  background: #ffffff;
  border-radius: 76px;
}
</style>