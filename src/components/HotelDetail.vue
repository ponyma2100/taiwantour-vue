<template>
  <div class="slide-hotel">
    <div class="title">
      <div class="logo">
        <img src="../assets/hotel-icon.png" alt="hotel" />
      </div>
      <p>優質住宿</p>
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
          <div v-if="hotel.Class" class="hotel-tag">
            {{ hotel.Class }}
          </div>
        </div>
        <div class="hotel-info">
          <div class="hotel-spec">
            {{ hotel.Spec ? hotel.Spec.split(";", 1)[0] : "未提供價錢" }}
          </div>
          <span class="hotel-city">
            {{ hotel.Address.substring(0, 3) }}
          </span>
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
.hotel-container {
  display: flex;
  align-items: center;
  /* flex-wrap: wrap; */
  overflow-x: scroll;
  height: 400px;
}
.hotel {
  display: flex;
  flex-direction: column;
  width: 290px;
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
  width: 290px;
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

.hotel-tag {
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #a8a8a8;
}
.hotel-info {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.hotel-city {
  font-size: 14px;
  line-height: 20px;
  color: #0085ff;
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
</style>