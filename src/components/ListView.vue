<template>
  <div class="spot-container">
    <div v-for="spot in scenicSpot.splice(0, 6)" :key="spot.ID">
      <div class="spot">
        <div class="spot-img">
          <img
            :src="spot.Picture.PictureUrl1"
            :alt="spot.Picture.PictureDescription1"
          />
        </div>
        <div class="spot-description">
          <div class="spot-name">
            {{ spot.Name }}
          </div>
          <div class="spot-address">
            {{ spot.Address }}
          </div>
        </div>
        <div class="spot-tag">
          <div v-if="spot.Class1" class="spot-tag1">
            {{ spot.Class1 }}
          </div>
          <div v-if="spot.Class2" class="spot-tag2">
            {{ spot.Class2 }}
          </div>
          <div v-if="spot.Class3" class="spot-tag3">
            {{ spot.Class3 }}
          </div>
          <div class="spot-city">
            {{ spot.Address.substring(0, 3) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  props: ["scenicSpot"],
  setup(props) {},
};
</script>

<style scoped>
.spot-container {
  display: flex;
  flex-wrap: wrap;
  padding: 100px;
  height: 600px;
}
.spot {
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 349px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 10px 10px;
}

.spot-description {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.spot-img {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 290px;
  height: 243px;
  background: #c4c4c4;
  border-radius: 10px 10px 0px 0px;
}
.spot-name {
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #000000;
}

.spot-address {
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #a8a8a8;
}
.spot-tag {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.spot-tag1,
.spot-tag2,
.spot-tag3 {
  background: #ededed;
  border-radius: 11px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 22px;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #000000;
  padding: 3px;
}

.spot-city {
  font-size: 14px;
  line-height: 20px;
  color: #0085ff;
}
</style>