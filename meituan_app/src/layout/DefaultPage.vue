<template>
  <div class="page-default">
    <el-container>
        <el-header height="">
            <header-bar/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer height="">
          <com-footer/>
        </el-footer>
    </el-container>
  </div>
</template>

<script>
import HeaderBar from "@/components/header/HeaderIndex.vue";
import comFooter from "@/components/footer/Footer.vue";
// import Index from "@/views/index.vue";

export default {
    components: {
        HeaderBar,
        comFooter,
    }
}
</script>

<style scoped>
:root,
body {
  background-color: #f8f8f8;
}

.el-header,
.el-footer {
  padding: 0!important;
}

.el-main {
  overflow:initial;
}

</style>