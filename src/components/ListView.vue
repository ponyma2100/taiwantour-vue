<template>
  <div class="spot-container-top">
    <div v-for="spot in scenicSpot.slice(0, 3)" :key="spot.ID">
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
    <div class="info">
      <div class="info-text">
        <h1>多久沒有</h1>
        <h1>出門走走了呢？</h1>
        <h4>Let’s get out</h4>
      </div>
      <button>更多FUNNY</button>
    </div>
  </div>
  <div class="spot-container-bottom">
    <div v-for="spot in scenicSpot.slice(3, 6)" :key="spot.ID">
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
  setup(props) {
    console.log(
      "🚀 ~ file: ListView.vue ~ line 43 ~ setup ~ props",
      props.scenicSpot.slice(4, 6)
    );
  },
};
</script>

<style scoped>
.spot-container-top,
.spot-container-bottom {
  display: flex;
  align-items: center;
  padding: 15px 100px;
  overflow: hidden;
  height: 400px;
}
/* .spot-container-top {
  justify-content: space-evenly;
} */
.spot-container-bottom {
  margin-left: 80px;
}
.spot {
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 349px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 10px 30px;
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

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60%;
  padding-left: 20px;
}
.info h4 {
  color: #9a9a9a;
}
</style>