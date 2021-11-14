<template>
  <div class="card-hotel">
    <div class="title">
      <p class="title-city">{{ $route.params.city }}</p>
      <p class="title-num">
        共有 <span>{{ hotels.length }}</span> 個熱門住宿
      </p>
    </div>
    <div class="hotel-container">
      <div class="hotel" v-for="hotel in hotels" :key="hotel.ID">
        <div class="hotel-img">
          <img
            :src="hotel.Picture.PictureUrl1"
            :alt="hotel.Picture.PictureDescription1"
          />
        </div>
        <div class="hotel-description">
          <div class="hotel-name">
            {{ hotel.Name }}
          </div>
          <div class="hotel-address" v-if="hotel.Address">
            {{ hotel.Address.substring(0, 20) }}
          </div>
        </div>
        <div class="hotel-tag">
          <div v-if="hotel.Class1" class="hotel-tag1">
            {{ hotel.Class1 }}
          </div>
          <div v-if="hotel.Class2" class="hotel-tag2">
            {{ hotel.Class2 }}
          </div>
          <div class="hotel-city" v-if="hotel.City">
            {{ hotel.City }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hotels"],
  setup(props) {},
};
</script>

<style scoped>
.card-hotel {
  padding-left: 20px;
}
.hotel-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow-x: scroll;
}
.hotel {
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 349px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 10px 30px;
}

.hotel-description {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.hotel-img {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 260px;
  height: 243px;
  background: #c4c4c4;
  border-radius: 10px 10px 0px 0px;
}
.hotel-name {
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #000000;
}

.hotel-address {
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #a8a8a8;
}
.hotel-tag {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.hotel-tag1,
.hotel-tag2,
.hotel-tag3 {
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

.hotel-city {
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