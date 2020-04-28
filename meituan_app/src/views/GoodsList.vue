<template>
  <div class="goods-container content-center">
    <el-row>
      <com-crumb />
    </el-row>

    <el-row>
      <!--  -->
      <el-col :span="19">
        <com-categroy title="" :list="classicList"/>
      </el-col>
      <!-- aside -->
      <el-col :span="5"></el-col>
    </el-row>
  </div>
</template>

<script>
import comCrumb from "@/components/products/crumbs.vue";
import comCategroy from "@/components/products/categroy.vue";

export default {
  components: {
    comCrumb,
    comCategroy
  },
  data() {
    return {
      classicList: [
        {
          title: "美食",
          type: "food",
          subList: [{ name: "日本菜", id: "Japan" }]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          subList: [{ name: "温泉酒店", id: "hot_spring" }]
        }
      ]
    };
  }
};
</script>

<style>
</style>