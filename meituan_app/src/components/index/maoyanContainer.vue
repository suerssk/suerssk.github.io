<template>
  <div class="com-maoyan">
    <el-row class="maoyan-nav clearfix">
      <dl>
        <dt>猫眼电影</dt>
        <dd class="active">即将上映</dd>
      </dl>
      <div class="all">
        <span>全部</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </el-row>

    <div class="maoyan-content">
      <el-row class="maoyan-body">
        <el-carousel indicator-position="none" :autoplay="false" :loop="false">
          <el-carousel-item v-for="item in 2" :key="item">
            <div
              class="item"
              v-for="imgItem  in maoyanImgsObj"
              :key="imgItem.name + '_' + (Math.random()*10)"
            >
              <img :src="imgItem.filmImg" />
              <div class="des">
                <p>
                  <span>{{imgItem.filmScore}}</span>人想看
                </p>
                <p class="film-name">{{imgItem.filmName}}</p>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-row>
    </div>
  </div>
</template>

<script>
// import axios from "@/utils/https.js";
import api from "@/api/index";

export default {
  data() {
    return {
      maoyanImgsObj: {}
    };
  },
  mounted() {
    // axios.get("/sliders/index").then(res => {});
    api.getSliderImgs().then(res => {
      this.maoyanImgsObj = res.maoyanImgs;
    });
  }
};
</script>

<style scoped lang="less">
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.com-maoyan {
  margin-top: 40px;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  .maoyan-nav {
    width: 100%;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    font-size: 14px;
    color: #fff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background: linear-gradient(
        to right,
        rgb(250, 60, 104) 2%,
        rgb(254, 70, 77) 97%
      )
      rgb(250, 60, 104);

    dl {
      display: flex;
      justify-content: space-around;
      float: left;

      dt {
        font-size: 18px;
        margin-left: 13px;
        margin-right: 10px;
      }
      dd {
        cursor: pointer;
        font-size: 14px;
        padding: 0 5px;
        position: relative;

        &.active::after {
          position: absolute;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 7px solid #fff;
          content: " ";
          display: block;
          width: 2px;
          height: 0;
          top: 37px;
          left: 0;
          right: 0;
          margin: auto;
        }
      }
    }

    .all {
      float: right;
      margin-right: 12px;
      cursor: pointer;
    }
  }

  .maoyan-content {
    text-align: center;

    .el-carousel__item {
      display: flex;
      justify-content: space-around;
      box-sizing: border-box;
      padding-top: 1px;
      cursor: pointer;

      .item {
        position: relative;

        img {
          border-radius: 4px;
        }

        .des {
          position: absolute;
          display: flex;
          flex-direction: column;
          bottom: 0;
          width: 100%;
          height: 30%;
          justify-content: center;
          align-items: flex-start;
          text-align: left;
          padding-left: 10px;
          padding-top: 25px;
          box-sizing: border-box;
          font-size: 12px;
          color: #fff;
          background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0)
          );

          span {
            font-size: 16px;
            color: #fd9827;
            font-weight: 500;
          }

          .film-name {
            width: 6em;
            font-size: 16px;
            padding-top: 3px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>