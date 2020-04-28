<template>
  <div class="select-wrap" @click="selectAddress" v-document-click="documentClick">
    <span>{{value}}</span>
    <i class="el-icon-caret-bottom"></i>
    <div class="dropdown-list" v-if="showListFlag">
      <h3>{{title}}</h3>
      <div class="address-list">
        <span
          v-for="(item, index) in address"
          :key="item"
          @click="chooseitem(item, index, $event)"
          :class="{active: index === activeIndex}"
        >{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "list", "value", "showListFlag"],
  data() {
    return {
      activeIndex: null
    };
  },
  methods: {
    // 选择省份 - 打开下拉框
    selectAddress(e) {
      e.stopPropagation();
      this.$emit("changeShowList", true);
    },
    // 选择省名
    chooseitem(item, index, e) {
      e.stopPropagation();
      this.activeIndex = index;
      this.$emit("changeShowList", false);
      this.$emit("changeProvince", item);
    },
    documentClick() {
      if (this.showListFlag) {
        this.$emit("changeShowList", false);
      }
    }
  },
  computed: {
    address() {
      return this.list;
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

  .dropdown-list {
    position: absolute;
    left: 0;
    top: 45px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    width: 264px;
    min-width: 100%;
    height: 450px;
    padding: 20px 0 20px 15px;
    box-sizing: border-box;
    border-radius: 4px;
    z-index: 10;
    cursor: default;

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
      margin-bottom: 11px;
    }

    .address-list {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      height: 100%;

      span {
        display: inline-block;
        font-size: 12px;
        color: #666;
        display: table;
        box-sizing: border-box;
        min-width: 40px;
        height: 20px;
        padding: 4px 8px 0;
        margin: 6px 38px 6px 0;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
          background-color: #ddd;
        }

        &.active {
          background: linear-gradient(to bottom right, #ffd000, #ffbd00);
          border-radius: 10px;
          color: #222222;
        }
      }
    }
  }
}
</style>