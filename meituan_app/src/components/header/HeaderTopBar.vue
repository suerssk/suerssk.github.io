<template>
  <div class="top-bar">
    <el-row class="content-center">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <header-geo />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <header-nav />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeaderGeo from './HeaderGeo';
import HeaderNav from './HeaderNav';

export default {
  components: {
    HeaderNav,
    HeaderGeo
  }
}
</script>

<style scoped lang="less">
@import '../../assets/css/public.less';

@f8: #f8f8f8;
@fs: 12px;
@color: #999;
.top-bar {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: @fs;
  background-color: @f8;
  color: @color;

}

</style>