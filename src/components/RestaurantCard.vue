<template>
  <div class="card-restaurant">
    <div class="title">
      <p class="title-city">{{ $route.params.city }}</p>
      <p class="title-num">
        共有 <span>{{ restaurants.length }}</span> 個美食饗宴
      </p>
    </div>
    <div class="restaurant-container">
      <div
        class="restaurant"
        v-for="restaurant in restaurants"
        :key="restaurant.RestaurantID"
      >
        <div class="restaurant-img">
          <img
            :src="restaurant.Picture.PictureUrl1"
            :alt="restaurant.Picture.PictureDescription1"
          />
        </div>
        <div class="restaurant-description">
          <div class="restaurant-name">
            {{ restaurant.RestaurantName }}
          </div>
          <div class="restaurant-address" v-if="restaurant.Address">
            {{ restaurant.Address.substring(0, 20) }}
          </div>
        </div>
        <div class="restaurant-tag">
          <div v-if="restaurant.Class1" class="restaurant-tag1">
            {{ restaurant.Class1 }}
          </div>
          <div v-if="restaurant.Class2" class="restaurant-tag2">
            {{ restaurant.Class2 }}
          </div>
          <div class="restaurant-city" v-if="restaurant.City">
            {{ restaurant.City }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["restaurants"],
  setup(props) {},
};
</script>

<style scoped>
.card-restaurant {
  padding-left: 20px;
}
.restaurant-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow-x: scroll;
}
.restaurant {
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 349px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 10px 30px;
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
  width: 260px;
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

.restaurant-tag1,
.restaurant-tag2,
.restaurant-tag3 {
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

.restaurant-city {
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