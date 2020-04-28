<template>
  <div class="slider">
    <el-carousel height="240px">
      <el-carousel-item v-for="item in sliderList" :key="item">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import axios from "@/utils/https.js";
import api from "@/api/index";

export default {
  data() {
    return {
      sliderList: []
    };
  },
  mounted() {
    // axios.get('/sliders/index').then(res => {
    //     this.sliderList = res.sliderImgsList;
    // })
    api.getSliderImgs().then(res => {
      this.sliderList = res.sliderImgsList;
    });
  }
};
</script>

<style lang="less" scoped>
.slider {
  width: 550px;
  height: 240px;
  box-sizing: border-box;
  cursor: pointer;

  .el-carousel-item {
    background: chartreuse;
  }
}
</style>