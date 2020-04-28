<template>
  <div class="choose-wrap">
    <div class="choose-province">
      <span>按省份选择：</span>
      <com-select
        title="省份"
        :list="provinceList"
        :showListFlag="showProvinceFlag"
        :value="provinceValue"
        @changeProvince="changeProvince"
        @changeShowList="changeShowProvinceList"
      />
    </div>

    <!-- 选择城市 -->
    <com-city
      title="城市"
      :list="cityList"
      :value="provinceValue"
      :showCityFlag="showCityFlag"
      @changeShowCityList="changeShowCityList"
    />

    <!-- 搜索框检索 -->
    <div class="search">
      <span>直接搜索：</span>
      <el-select
        v-model="searchWord"
        filterable
        remote
        reserve-keyword
        placeholder="请输入城市中文或拼音"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import comSelect from "./select";
import comCity from "./city";
import api from "@/api/index";

export default {
  components: {
    comSelect,
    comCity
  },
  mounted() {
    api.getAddressList().then(res => {
      this.list = res.address;
      this.provinceList = Object.keys(this.list);
    });
  },
  data() {
    return {
      list: {},
      showProvinceFlag: false,
      showCityFlag: false,
      provinceValue: "省份",
      provinceList: [],
      searchList: [],
      searchWord: "",
      loading: false
    };
  },
  computed: {
    cityList() {
      return this.list[this.provinceValue];
    }
  },
  methods: {
    changeProvince(item) {
      this.provinceValue = item;
    },
    changeShowProvinceList(flag) {
      this.showProvinceFlag = flag;
      if (flag && this.showCityFlag) {
        this.showCityFlag = false;
      }
    },
    changeShowCityList(flag) {
      this.showCityFlag = flag;
      if (flag && this.showProvinceFlag) {
        this.showProvinceFlag = false;
      }
    },
    remoteMethod(queryVal) {
      // queryVal 是 input 框输入的值，用于发送搜索请求
      this.searchWord = queryVal;
      if (queryVal !== "") {
        this.loading = true;
        // axios.get("").then(res => {
        //   this.loading = false;
        //   this.searchList = res.data;
        // });
        // 因为 el-select v-model 绑定的是 input 框的 placeholder 属性
        // 所以此处做置空处理
        this.searchWord = "";
      } else {
        this.searchList = [];
      }
    }
  }
};
</script>

<style lang="less">
.choose-wrap {
  display: inline-flex;
  .el-select .el-input__inner {
    cursor: text;
  }
}
</style>