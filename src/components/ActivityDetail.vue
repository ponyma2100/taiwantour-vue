<template>
  <div class="slide-activity">
    <div class="title">
      <div class="logo">
        <img src="../assets/activity-icon.png" alt="activity" />
      </div>
      <p>特色活動</p>
    </div>
    <div class="activity-container">
      <vue-horizontal>
        <section
          class="activity"
          v-for="activity in activities"
          :key="activity.ID"
        >
          <div class="activity-img">
            <img
              :src="activity.Picture.PictureUrl1"
              :alt="activity.Picture.PictureDescription1"
            />
          </div>
          <div class="activity-description">
            <div class="activity-name">
              {{ activity.Name }}
            </div>
            <div class="activity-address" v-if="activity.Address">
              {{ activity.Address.substring(0, 20) }}
            </div>
          </div>
          <div class="activity-tag">
            <div v-if="activity.Class1" class="activity-tag1">
              {{ activity.Class1 }}
            </div>
            <div v-if="activity.Class2" class="activity-tag2">
              {{ activity.Class2 }}
            </div>
            <div class="activity-city" v-if="activity.City">
              {{ activity.City }}
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
  props: ["activities"],
  setup(props) {},
};
</script>

<style scoped>
.activity-container {
  margin: 0 20px;
}

.activity {
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 349px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 10px 30px;
}

.activity-description {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.activity-img {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 290px;
  height: 243px;
  background: url("../assets/noimg.png") #c4c4c4;
  border-radius: 10px 10px 0px 0px;
}
.activity-name {
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #000000;
}

.activity-address {
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #a8a8a8;
}
.activity-tag {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.activity-tag1,
.activity-tag2,
.activity-tag3 {
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

.activity-city {
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
</style>