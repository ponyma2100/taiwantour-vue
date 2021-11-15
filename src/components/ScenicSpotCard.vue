<template>
  <div class="card-scenicSpot">
    <div class="title">
      <p class="title-city">{{ $route.params.city }}</p>
      <p class="title-num">
        共有 <span>{{ scenicSpots.length }}</span> 個熱門景點
      </p>
    </div>
    <div class="scenicSpot-container">
      <div
        class="scenicSpot"
        v-for="scenicSpot in scenicSpots"
        :key="scenicSpot.ID"
      >
        <div class="scenicSpot-img">
          <img
            :src="scenicSpot.Picture.PictureUrl1"
            :alt="scenicSpot.Picture.PictureDescription1"
          />
        </div>
        <div class="scenicSpot-description">
          <div class="scenicSpot-name">
            {{ scenicSpot.Name }}
          </div>
          <div class="scenicSpot-address" v-if="scenicSpot.Address">
            {{ scenicSpot.Address.substring(0, 20) }}
          </div>
        </div>
        <div class="scenicSpot-tag">
          <div v-if="scenicSpot.Class1" class="scenicSpot-tag1">
            {{ scenicSpot.Class1 }}
          </div>
          <div v-if="scenicSpot.Class2" class="scenicSpot-tag2">
            {{ scenicSpot.Class2 }}
          </div>
          <div class="scenicSpot-city" v-if="scenicSpot.City">
            {{ scenicSpot.City }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["scenicSpots"],
  setup(props) {},
};
</script>

<style scoped>
.card-scenicSpot {
  padding-left: 20px;
}
.scenicSpot-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow-x: scroll;
}
.scenicSpot {
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 349px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 10px 30px;
}

.scenicSpot-description {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.scenicSpot-img {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 260px;
  height: 243px;
  background: url("../assets/noimg.png") #c4c4c4;
  border-radius: 10px 10px 0px 0px;
}
.scenicSpot-name {
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #000000;
}

.scenicSpot-address {
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #a8a8a8;
}
.scenicSpot-tag {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.scenicSpot-tag1,
.scenicSpot-tag2,
.scenicSpot-tag3 {
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

.scenicSpot-city {
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
  align-items: self-end;
}
.title p {
  font-size: 26px;
  font-weight: bold;
}
.title-num span {
  color: #1eb893;
}
</style>