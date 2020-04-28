<template>
  <div class="search-bar content-center">
    <el-row class="logo-box">
      <el-col :span="3" class="logo">
        <router-link to="/">
          <img src="@/assets/images/logo.png" alt />
        </router-link>
      </el-col>
      <!-- search-input -->
      <el-col :span="18" :offset="3">
        <div class="header-search">
          <input
            type="text"
            v-model="searchWord"
            name="search-inp"
            @focus="onFocus"
            @blur="onBlur"
            placeholder="搜索商家或地点"
            autocomplete="off"
          />
          <el-button type="primary" icon="el-icon-search"></el-button>
        </div>
        <!-- 搜索提示框 -->
        <div class="search-suggest">
          <div class="header-search-noinput" v-if="isHotSearch">
            <dl>
              <dt>热门搜索</dt>
              <dd v-for="(hotWord, index) in hotWordsList" :key="index">
                <router-link :to="{name: 'goods', params: {name: hotWord}}">{{ hotWord }}</router-link>
              </dd>
            </dl>
          </div>
          <div class="header-search-hasinput" v-if="isSearchList">
            <ul>
              <dd v-for="(searchWord, index) in searchWordsList" :key="index">
                <router-link :to="{name: 'goods', params: {name: searchWord}}">{{ searchWord }}</router-link>
              </dd>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: "",
      hotWordsList: [
        "大欢喜",
        "伏見桃山",
        "深圳欢乐谷",
        "啊臻味道米粉",
        "哥老官重庆美蛙鱼头",
        "小梅沙沙滩"
      ],
      searchWordsList: ["火锅", "hro"],
      isFocus: false
    };
  },
  computed: {
    isHotSearch() {
      return this.isFocus && !this.searchWord;
    },
    isSearchList() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    onFocus() {
      this.isFocus = true;
    },
    onBlur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 300);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/public.less";

.search-bar {
  position: relative;

  .logo-box {
    padding-top: 28px;
    // padding-right: 60px;
    padding-bottom: 40px;
    font-size: 16px;
    min-width: 220px;
    height: 54px;
    box-sizing: content-box;
    vertical-align: sub;

    .logo {
      display: inline-block;

      img {
        width: 126px;
        height: 46px;
        border: 0;
      }
    }

    .header-search {
      width: 550px;
      height: 40px;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      z-index: 999;

      input {
        border: 1px solid #e5e5e5;
        border-right: none;
        border-radius: 4px 0 0 4px;
        line-height: 100%;
        box-sizing: border-box;
        display: inline-block !important;
        padding: 15px;
        font-size: 14px;
        height: 100%;
        background: transparent;
        width: 85.45%;
        outline: none;
      }
      button {
        outline: none;
        width: 14.55%;
        box-sizing: border-box;
        line-height: 100%;
        height: 100%;
        background: #ffc300;
        border: none;
        float: right;
        color: #222222;
        cursor: pointer;
        border-radius: 0 4px 4px 0;
        font-weight: bolder;
      }
    }

    .search-suggest {
      position: absolute;
      top: 68px;
      left: 50%;
      transform: translateX(-275px);
      width: 470px;
      box-sizing: border-box;
      position: absolute;
      border: 1px solid #e5e5e5;
      border-top: none;
      background: #fff;
      z-index: 999;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      color: #999;
      font-size: 12px;
      text-align: left;

      .header-search-noinput {
        padding: 10px 5px 30px;

        dd {
          margin-top: 10px;
          margin-right: 5px;
          display: inline-block;
          padding: 2px 3px;

          &:hover a {
            color: #fe8800;
          }
        }
      }

      .header-search-hasinput {
        a {
          display: block;
          color: #333;
          padding: 3px 10px;
          line-height: 1.6;

          &:hover {
            color: #fe8c00;
            background-color: #f8f8f8;
          }
        }
      }
    }
  }
}
</style>