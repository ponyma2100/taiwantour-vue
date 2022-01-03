<template>
  <div class="slide-restaurant">
    <div class="title">
      <div class="logo">
        <img src="../assets/food-icon.png" alt="food" />
      </div>
      <p>餐飲美食</p>
    </div>
    <div class="restaurant-container">
      <vue-horizontal>
        <section
          v-for="restaurant in restaurants"
          :key="restaurant.ID"
          class="restaurant"
        >
          <div
            class="restaurant-image"
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
                  <span class="restaurant-city">{{ restaurant.City }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </vue-horizontal>
    </div>
  </div>
</template>

<script>
import VueHorizontal from "vue-horizontal";
export default {
  components: { VueHorizontal },
  props: ["restaurants"],
  setup(props) {},
};
</script>

<style scoped>
.restaurant-container {
  margin: 0 20px;
}
.restaurant {
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 349px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 10px 30px;
}

.restaurant-image {
  width: 290px;
  height: 349px;
  position: relative;
}

.restaurant-description {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.restaurant-img {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 290px;
  height: 243px;
  background: url("../assets/noimg.png") #c4c4c4;
  border-radius: 10px 10px 0px 0px;
}
.restaurant-name {
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #000000;
}

.restaurant-address {
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #a8a8a8;
}
.restaurant-tag {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.restaurant-city {
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

.restaurant-name,
.restaurant-detail > span {
  font-weight: bold;
  line-height: 23px;
  color: #ffffff;
}

.restaurant-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;
}
.restaurant-city {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 26px;
  background: #0e0e0e;
  border-radius: 10.5px;
}
.mask {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 10px 10px;
  position: absolute;
  position: absolute;
  bottom: 0;
}
</style>