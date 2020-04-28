<template>
    <div class="header">
        <el-row>
            <top-bar/>
        </el-row>
        <el-row>
            <search-bar/>
        </el-row>
    </div>
</template>

<script>
import topBar from "./HeaderTopBar";
import searchBar from "./HeaderSerachBar";

export default {
    components: {
        topBar,
        searchBar
    }
}
</script>

<style scoped lang="less">
.header {
    background: #fff;
    box-shadow: 0 2px 27px 0 rgba(0, 0, 0,.1);
    padding-bottom: 35px;
}

</style>