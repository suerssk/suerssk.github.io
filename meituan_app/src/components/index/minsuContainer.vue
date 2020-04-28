<template>
  <div class="com-minsu">
    <el-row class="minsu-nav clearfix">
      <dl>
        <dt>推荐民宿</dt>
        <dd
          v-for="(city, index) in minsuCitys"
          :key="city"
          :class="{active: index === activeIndex}"
          @mouseenter="mouseEnter(index)"
          @mouseleave="mouseLeave"
        >{{city}}</dd>
      </dl>
      <div class="all">
        <span>全部</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </el-row>

    <!-- 民宿 content -->
    <el-row class="minsu-content">
      <div class="minsu-item" v-for="minsuItem in minsuContentList" :key="minsuItem.title">
        <router-link to="/" class="d-b">
          <div class="minsu-header">
            <img :src="minsuItem.img" />
            <img class="avatar" src="@/assets/images/minsu_avatar.png" />
          </div>
          <div class="minsu-info">
            <p class="minsu-title">{{ minsuItem.title }}</p>
            <p class="sub-title">{{ minsuItem.sub_title }}</p>
            <p class="price">
              <span class="price-icon">￥</span>
              {{ minsuItem.price }}
            </p>
          </div>
        </router-link>
      </div>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index";

export default {
  data() {
    return {
      activeIndex: 0,
      timer: null,
      minsuCitys: [
        "广州",
        "厦门",
        "珠海",
        "桂林",
        "海口",
        "惠州",
        "佛山",
        "东莞",
        "清远",
        "湛江"
      ],
      minsuContentList: []
    };
  },
  methods: {
    mouseEnter(index) {
      this.timer = setTimeout(() => {
        if (index !== this.activeIndex) {
          this.getData();
          this.activeIndex = index;
        } else {
          return;
        }
      }, 100);
    },
    mouseLeave() {
      clearTimeout(this.timer);
    },
    getData() {
      api
        .getMinsuInfo()
        .then(res => {
          this.minsuContentList = res.minsuList;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="less" scoped>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.com-minsu {
  margin-top: 40px;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  .minsu-nav {
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
        rgb(243, 182, 74) 2%,
        rgb(242, 197, 69) 97%
      )
      rgb(243, 182, 74);

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

  .minsu-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 10px;
    border: 1px solid #e5e5e5;
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    .minsu-item {
      display: inline-block;
      margin: 0 auto;

      .d-b {
        display: block;
      }

      .minsu-header {
        position: relative;

        .avatar {
          position: absolute;
          border: 2px solid #ffffff;
          height: 48px;
          width: 48px;
          bottom: -12px;
          right: 15px;
          z-index: 9;
          border-radius: 40px;
        }
      }

      .minsu-info {
        text-align: left;
        padding-bottom: 25px;

        .minsu-title {
          font-size: 16px;
          color: #222222;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 7px 0;
          font-weight: 400;
          width: 297px;
        }

        .sub-title {
          font-size: 12px;
          color: #999;
        }

        .price {
          font-weight: 500;
          font-size: 22px;
          color: #ff6600;
          letter-spacing: -0.8px;
          padding: 4px 0;

          .price-icon {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>