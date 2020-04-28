<template>
  <div class="content-center change-city">
    <!-- 按省份选择 -->
    <el-row :span="24" class="op-area">
      <com-province />
    </el-row>
    <!-- 热门城市 -->
    <el-row :span="24" class="citylist">
      <span>热门城市：</span>
      <div class="city">
        <router-link to="/" v-for="city in hotCityList" :key="city">{{ city }}</router-link>
      </div>
    </el-row>
    <!-- 最近访问 -->
    <el-row :span="24" class="recent-city">
      <span>最近访问：</span>
      <div class="city">
        <router-link to="/" v-for="(city, index) in recentCityList" :key="city + index">{{ city }}</router-link>
      </div>
    </el-row>
    <!-- 按拼音字母选择 -->
    <el-row :span="24" class="alphabet">
      <span>按拼音首字母选择：</span>
      <div class="letters">
        <router-link to="/" v-for="letter in letters" :key="letter">{{ letter }}</router-link>
      </div>
    </el-row>

    <el-row :span="24" class="alphabet-city">
      <div class="city-area" v-for="(cityLabel, index) in cityAreaLabels" :key="index">
        <span class="city-label">{{ cityLabel }}</span>
        <div class="cities">
          <router-link to="/" v-for="(city, i) in cityAreaObj[cityLabel]" :key="city+'_'+i">{{city}}</router-link>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import comProvince from "@/components/changecity/province.vue";

export default {
  components: {
    comProvince
  },
  data() {
    return {
      hotCityList: [
        "北京",
        "上海",
        "广州",
        "深圳",
        "天津",
        "西安",
        "重庆",
        "杭州",
        "南京",
        "武汉",
        "成都"
      ],
      recentCityList: ["深圳", "东方"],
      letters: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z"
      ],
      cityAreaObj: {
        // 此本也应该发出请求获取(偷懒了)
        A: ["鞍山", "安庆", "安阳", "安顺", "...","鞍山", "安庆", "安阳", "安顺", "...","鞍山", "安庆", "安阳", "安顺", "...","鞍山", "安庆", "安阳", "安顺", "...","鞍山", "安庆", "安阳", "安顺", "...","鞍山", "安庆", "安阳", "安顺", "..."],
        B: ["北京", "保定", "包头", "蚌埠", "宝鸡", "..."]
      }
    };
  },
  computed: {
    cityAreaLabels() {
      return Object.keys(this.cityAreaObj);
    }
  }
};
</script>

<style scoped lang="less">
.change-city {
  box-sizing: border-box;
  margin: 20px auto 0;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 1000px;
  padding: 20px;

  .op-area {
    padding-bottom: 30px;
    border-bottom: 1px solid #e5e5e5;
  }

  .citylist,
  .recent-city {
    border-bottom: 1px solid #e5e5e5;
    padding: 30px 0;

    .city {
      display: inline-flex;
      max-width: 900px;
      font-size: 14px;
      a {
        margin: 0 20px;
        display: inline-block;
        color: #666;
      }
    }
  }

  .alphabet {
    padding: 30px 0;

    span {
      font-size: 16px;
      color: #333;
      font-weight: 500;
      display: inline-block;
    }
    .letters {
      max-width: 1000px;
      font-size: 14px;
      display: inline-block;

      a {
        font-size: 15px;
        color: #666;
        display: inline-block;
        margin: 0 10px;
        width: 25px;
        height: 25px;
        padding-top: 5px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border-radius: 50%;

        &:hover {
          font-weight: 500;
          color: #222222;
          background: #f8f8f8;
        }
      }
    }
  }

  .alphabet-city {
    .city-area {
      padding: 13px 30px 13px 10px;
      border-radius: 10px;
      transition: background-color 0.5s;
      display: flex;

      &:hover {
        background: #f8f8f8;
      }

      .city-label {
        box-sizing: border-box;
        vertical-align: top;
        padding-top: 10px;
        display: inline-block;
        text-align: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #222222;
        background: #ffd000;
      }

      .cities {
        display: inline-block;
        max-width: 1065px;

        a {
          margin: 10px 20px;
          color: #666;
          display: inline-block;
          font-size: 14px;
        }
      }
    }
  }
}
</style>