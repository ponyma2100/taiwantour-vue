<template>
  <div class="spot-container-top">
    <div v-for="spot in scenicSpots.slice(0, 3)" :key="spot.ID">
      <div class="spot">
        <div class="spot-img">
          <img
            :src="spot.Picture.PictureUrl1"
            :alt="spot.Picture.PictureDescription1"
          />
        </div>
        <div class="spot-description">
          <div class="spot-name">
            {{ spot.ScenicSpotName }}
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
      <router-link :to="{ name: 'ScenicSpot', params: { city: 'Taipei' } }"
        ><button>更多FUNNY</button></router-link
      >
    </div>
  </div>
  <div class="spot-container-bottom">
    <div v-for="spot in scenicSpots.slice(6, 10)" :key="spot.ID">
      <div class="spot">
        <div class="spot-img">
          <img
            :src="spot.Picture.PictureUrl1"
            :alt="spot.Picture.PictureDescription1"
          />
        </div>
        <div class="spot-description">
          <div class="spot-name">
            {{ spot.ScenicSpotName }}
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
          <div class="spot-city" v-if="spot.Address">
            {{ spot.Address.substring(0, 3) }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="restaurant-container">
    <div class="info">
      <div class="info-text">
        <h1>餐飲美食</h1>
        <h4>TASTY</h4>
      </div>
      <router-link :to="{ name: 'Restaurant', params: { city: 'Taipei' } }"
        ><button>更多美味</button></router-link
      >
    </div>
    <vue-horizontal class="restaurant-carousel">
      <section v-for="restaurant in restaurants" :key="restaurant.ID">
        <div
          class="restaurant"
          :style="{
            'background-image': `url('${restaurant.Picture.PictureUrl1}')`,
          }"
        >
          <div class="mask">
            <div class="restaurant-description">
              <div class="restaurant-name">
                {{ restaurant.RestaurantName }}
              </div>
              <div class="restaurant-detail">
                <span class="restaurant-tag">{{ restaurant.Class }}</span>
                <span class="restaurant-city">{{
                  restaurant.Address.substring(0, 3)
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </vue-horizontal>
  </div>

  <div class="hotel-info-header">
    <h1>精選住宿</h1>
    <h4>accommodation</h4>
  </div>

  <div class="hotel-container">
    <vue-horizontal>
      <section class="hotel" v-for="hotel in hotels" :key="hotel.ID">
        <div class="hotel-img">
          <img
            :src="hotel.Picture.PictureUrl1"
            :alt="hotel.Picture.PictureDescription1"
          />
        </div>
        <div class="hotel-description">
          <div class="hotel-name">
            {{ hotel.HotelName }}
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
      </section>
    </vue-horizontal>
  </div>
  <div class="hotel-info-bottom">
    <router-link :to="{ name: 'Hotel', params: { city: 'Taipei' } }"
      ><button>更多住宿</button></router-link
    >
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import VueHorizontal from "vue-horizontal";
export default {
  components: { VueHorizontal },

  props: ["scenicSpots", "restaurants", "hotels"],
};
</script>

<style scoped>
.spot-container-top,
.spot-container-bottom {
  display: flex;
  align-items: center;
  padding: 15px 120px;
  overflow: hidden;
  height: 400px;
}
.hotel-container {
  padding: 15px 120px;
}
.spot-container-top,
.spot-container-bottom {
  justify-content: space-around;
}
.spot-container-bottom {
  margin-left: 80px;
}

.spot,
.restaurant,
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

.restaurant-container {
  display: flex;
  padding: 15px;
  padding-left: 85px;
  background-image: url("../assets/rest-bg.png");
}

.restaurant-carousel {
  width: 65vw;
  margin-left: 200px;
}

.restaurant {
  justify-content: flex-end;
  width: 250px;
  height: 335px;
  background-size: cover;
}

.spot-description,
.hotel-description {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.spot-img,
.hotel-img {
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

.spot-address,
.hotel-tag {
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #a8a8a8;
}
.spot-tag,
.hotel-info {
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

.spot-city,
.hotel-city {
  font-size: 14px;
  line-height: 20px;
  color: #0085ff;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
}
.hotel-info-header h4,
.info h4 {
  color: #9a9a9a;
}

.restaurant-description {
  width: 250px;
  margin: 10px 10px;
}
.restaurant-name,
.restaurant-detail > span {
  font-weight: bold;
  line-height: 23px;
  color: #ffffff;
}

.restaurant-detail {
  display: flex;
  justify-content: space-between;
  width: 235px;
}
.restaurant-city {
  display: flex;
  align-items: center;
  width: 52px;
  height: 26px;
  background: #0e0e0e;
  border-radius: 10.5px;
}

.mask {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 10px 10px;
}

.hotel-info-header,
.hotel-info-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
}
.item {
  background: #f3f3f3;
  padding: 16px 24px;
  margin-right: 24px;
}
</style>