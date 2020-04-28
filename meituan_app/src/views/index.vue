<template>
  <div class="page-index content-center">
      <el-row>
          <!-- menu area -->
          <el-col :span="5">
              <com-menu />
          </el-col>
          <!-- 主区域 -->
          <el-col :span="19">
              <com-life />
          </el-col>
      </el-row>
      <!-- 猫眼 area -->
      <el-row>
          <el-col :span="24">
              <com-maoyan-container/>
          </el-col>
      </el-row>

      <!-- 民宿 area -->
      <el-row>
          <el-col :span="24">
              <com-minsu-container/>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import comMenu from "@/components/index/menu.vue";
import comLife from "@/components/index/life.vue";
import comMaoyanContainer from "@/components/index/maoyanContainer.vue";
import comMinsuContainer from "@/components/index/minsuContainer.vue";

export default {
    components: {
        comMenu,
        comLife,
        comMaoyanContainer,
        comMinsuContainer
    }

}
</script>

<style scoped lang="less">
@import url("../assets/css/public.less");


</style>