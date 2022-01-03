<template>
  <div class="slide-spot">
    <div class="title">
      <p class="title-city">{{ $route.params.city }}</p>
      <p>景點介紹</p>
    </div>
    <div class="spot-container">
      <vue-horizontal>
        <section v-for="spot in scenicSpots" :key="spot.ID" class="spot">
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
            <div class="spot-detail">
              {{ spot.DescriptionDetail.substring(0, 50) + "..." }}
            </div>
            <div class="spot-address">
              {{ spot.Address }}
            </div>
          </div>
        </section>
      </vue-horizontal>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import VueHorizontal from "vue-horizontal";

export default {
  components: { VueHorizontal },
  props: ["scenicSpots"],
  setup(props) {
    const route = useRoute();
  },
};
</script>

<style scoped>
.spot-container {
  margin: 0 20px;
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
  background: url("../assets/noimg.png") #c4c4c4;
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
  align-items: center;
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
.title {
  display: flex;
  padding: 20px 30px;
}
.title p {
  font-size: 26px;
  font-weight: bold;
}
.title-city {
  color: #1eb893;
}
</style>