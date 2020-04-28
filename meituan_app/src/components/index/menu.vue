<template>
  <div class="com-menu" @mouseleave="menuLeave">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="(menuItem, index) in menuList"
        :key="index"
        class="clearfix"
        @mouseenter="menuEnter(menuItem)"
      >
        <i :class="menuItem.icon"></i>
        <span>{{menuItem.title}}</span>
        <i class="el-icon-arrow-right fr"></i>
      </dd>
    </dl>
    <!-- detail box -->
    <template v-if="curDetail">
      <div class="detail">
        <div v-for="(item, index) in curDetail.children" :key="index">
          <div class="detail-title">
            <h4>
              <a href="javascript:;">{{ item.title }}</a>
            </h4>
            <span>
              <a href="javascript:;">更多</a>
              <i class="el-icon-arrow-right fr"></i>
            </span>
          </div>
          <div class="detail-body">
            <router-link :to="{name: 'goods', params: {name: v}}" v-for="(v, i) in item.children" :key="v + '_' + i">{{ v }}</router-link>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
// import axios from "@/utils/https";
import api from "@/api/index";

export default {
  data() {
    return {
      menuList: [],
      curDetail: null
    };
  },
  computed: {},
  methods: {
    menuEnter(item) {
      this.curDetail = item;
    },
    menuLeave() {
      this.curDetail = null;
    }
  },
  mounted() {
    api
      .getMenuList()
      .then(res => {
        this.menuList = res.menuList.menuList;
      })
      .catch(err => {
        console.log(err);
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
.fr {
  float: right;
}

.com-menu {
  width: 230px;
  height: 466px;
  position: relative;
  text-align: left;
  box-sizing: border-box;
  margin-top: -60px;
  color: #646464;
  background: #fff;
  border: 1px solid #e5e5e5;

  dl {
    dt {
      color: #222222;
      font-size: 16px;
      font-weight: 700;
      margin-left: 15px;
      height: 45px;
      line-height: 45px;
      box-sizing: border-box;
    }
    dd {
      position: relative;
      box-sizing: border-box;
      padding: 2px 12px;
      height: 26px;
      line-height: 26px;
      cursor: pointer;

      &:hover {
        background-color: rgba(255, 150, 0, 0.08);
        color: #222;
        font-weight: bold;
      }

      i {
        vertical-align: middle;
      }

      span {
        margin-left: 10px;
        font-size: 13px;
      }

      .el-icon-arrow-right {
        font-size: 12px;
        margin-top: 6px;
      }
    }
  }

  .detail {
    position: absolute;
    top: 50px;
    left: 230px;
    background-color: #fff;
    width: 400px;
    height: 355px;
    z-index: 199;
    color: #666;
    overflow: hidden;
    padding: 30px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

    .detail-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e5e5e5;

      h4 {
        font-size: 16px;
        font-weight: 500;
        color: #222;
      }

      span {
        font-size: 12px;
        color: #999;
        font-weight: 400;
        margin-right: 6px;
        cursor: pointer;

        a {
          color: #999;
        }
      }
    }
    .detail-body {
      padding-bottom: 10px;

      a {
        color: #999;
        font-size: 12px;
        line-height: 15px;
        display: inline-block;
        margin-right: 16px;
        margin-top: 10px;
        cursor: pointer;

        &:hover {
          color: #fe8c00;
        }
      }
    }
  }
}

// 巫山云雨寒岩冷，梦境依稀令人愁
</style>