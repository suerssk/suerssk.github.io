<template>
  <div class="choose-city">
    <div
      class="select-wrap"
      @click="selectCity"
      v-document-click="documentClick"
      :class="{disableSelect: cityIsClick}"
    >
      <span>{{title}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div class="dropdown-list" v-if="showCityFlag">
        <h3>{{title}}</h3>
        <div class="address-list">
          <router-link v-for="item in cityList" :key="item" to="/">{{ item }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "value", "list", "showCityFlag"],
  data() {
    return {
      choosedProvince: false
    };
  },
  computed: {
    cityIsClick() {
      if (this.value === "省份" || this.value === undefined) {
        return true;
      } else {
        return false;
      }
    },
    cityList() {
      return this.list;
    }
  },
  methods: {
    documentClick() {
      if (this.showCityFlag) {
        this.$emit("changeShowCityList", false);
      }
    },
    selectCity(e) {
      e.stopPropagation();
      if (this.cityIsClick) {
        // 不可展开
        return;
      }
      this.$emit("changeShowCityList", true);
    }
  }
};
</script>

<style scoped lang="less">
.select-wrap {
  width: 150px;
  height: 40px;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  margin: 0 10px 0 20px;
  font-size: 14px;
  color: #666;
  position: relative;

  &.disableSelect {
    cursor: not-allowed;
  }

  .dropdown-list {
    position: absolute;
    left: 0;
    top: 45px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    padding: 20px 0 20px 12px;
    height: 450px;
    box-sizing: border-box;
    min-width: 150px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    cursor: default;
    z-index: 10;

    &::before,
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-bottom: 5px solid #e5e5e5;
      position: absolute;
      left: 20px;
      top: -11px;
    }
    &::after {
      border-bottom-color: #fff;
      top: -10px;
    }

    h3 {
      font-size: 16px;
      color: #ccc;
      margin-bottom: 10px;
    }

    .address-list {
      writing-mode: vertical-lr;
      a {
        color: #666;
        font-size: 12px;
        box-sizing: border-box;
        min-width: 40px;
        height: 20px;
        padding: 4px 8px 0;
        margin: 6px 0;
        border-radius: 10px;
        white-space: nowrap;
        width: 136px;
        writing-mode: horizontal-tb;

        &:hover {
          color: #000;
        }
      }
    }
  }
}
</style>