<template>
  <div class="com-life">
    <el-row>
        <ul class="nav">
            <li>
                <router-link to="/" class="waimai-link">美团外卖</router-link>
            </li>
            <li>
                <router-link to="/" class="maoyan-link">猫眼电影</router-link>
            </li>
            <li>
                <router-link to="/" class="jiudian-link">美团酒店</router-link>
            </li>
            <li>
                <router-link to="/" class="minsu-link">民宿/公寓</router-link>
            </li>
            <li>
                <router-link to="/" class="shangjia-link">商家入驻</router-link>
            </li>
            <li>
                <router-link to="/" class="gongyi-link">美团公益</router-link>
            </li>
        </ul>
    </el-row>
    <!-- slider - banner -->
    <el-row class="mtl-1 d-flex">
        <el-col :span="14" class="slider-container">
            <com-slider class="trans-bd"/>
        </el-col>
        <el-col :span="4">
            <router-link to="/" class="pic1 trans-bd"/>
        </el-col>
        <el-col :span="6">
            <!-- login -->
            <com-login/>
        </el-col>
    </el-row>
    <!--  -->
    <el-row class="ml-1 d-flex">
        <el-col :span="7">
            <router-link to="/" class="d-b pic-2 trans-bd"/>
        </el-col>
        <el-col :span="7" class="ml-3 trans-bd">
            <router-link to="/" class="d-b pic-3"/>
        </el-col>
        <el-col :span="4">
            <router-link to="/" class="d-b pic-4 trans-bd"/>
        </el-col>
        <el-col :span="6">
            <com-downloadapp/>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import comSlider from "./slider";
import comLogin from "./loginCard";
import comDownloadapp from "./downloadCard";

export default {
    components:{
        comSlider,
        comLogin,
        comDownloadapp
    }

}
</script>

<style scoped lang="less">

.com-life {
    position: relative;

    .nav {
        position: absolute;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 640px;
        top: -45px;
        left: 20px;

        a {
            color: #222;
            font-weight: 700;
            font-size: 16px;
            margin: 0 20px;
            cursor: pointer;
            position: relative;

            &:hover {
                color: #ed1e24;
            }

            &.waimai-link:hover,
            &.minsu-link:hover {
                color: #fbc700;
            }

            &.shangjia-link:hover {
                color: #FE8C00;
            }
        }
    }

    .d-flex {
        display: flex;
    }

    .pic1 {
        display: block;
        width: 150px;
        height: 240px;
        background-image: url("http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg");
        background-size: contain;
        box-sizing: border-box;
    }

    .mtl-1 {
        margin-top: -10px;
        margin-left: -10px;

        .slider-container {
            margin-right: 5px;
        }
    }

    .trans-bd {
        transition: box-shadow .3s ease;

        &:hover {
            box-shadow: 0 0 10px 3px rgba(0, 0, 0, .1);
        }
    }
    .d-b {
        display: block;
    }

    .ml-1 {
        margin-left: -10px;
    }

    .ml-3 {
        margin-left: 3px;
    }

    a.pic-2,
    a.pic-3 {
        width: 270px;
        height: 165px;
        background-size: 270px;
        background-position: 50%;
        background-repeat: no-repeat;
        margin-top: 10px;
        margin-right: 10px;
    }
    a.pic-2 {
        background-image: url("http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg");
    }
    a.pic-3 {
        background-image: url("http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg");
    }

    a.pic-4 {
        width: 150px;
        height: 165px;
        background-image: url("http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg");
        background-size: contain;
        margin-top: 10px;
        margin-right: 10px;
    }
}

</style>