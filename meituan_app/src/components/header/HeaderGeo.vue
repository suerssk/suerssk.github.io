<template>
  <div class="header-geo">
      <div class="position">
          <i class="el-icon-location-outline"/>
          深圳
          <router-link class="change-city" :to="{ name: 'changeCity'}">切换城市</router-link>
          <div class="near-city in-b">
            [
            <a href="javascript:;">东方</a>
            <a href="javascript:;">基隆</a>
            <a href="javascript:;">嘉义市</a>
            ]
          </div>
          <div class="user-enty in-b">
            <router-link :to="{name: 'login'}" class="login">立即登录</router-link>
            <router-link :to="{name: 'register'}" class="register">注册</router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
@hoverColor: #fe8c00;
@hoverWeight: 400;

.header-geo{
  // position: relative;
  a {
    color: #999;
  }

  .in-b {
    display: inline-block;
  }

  .position{
    font-weight: 400;

    .change-city {
      background: #F4F4F4;
      border: 1px solid #E5E5E5;
      border-radius: 2px;
      color: #666;
      margin: 0 4px;
      padding: 0 2px;
    }
    .change-city:hover {
      color: @hoverColor;
      font-weight: @hoverWeight;
    }

    .near-city {
      a {
        margin: 0 2px;
      }
      a:hover {
        color: @hoverColor;
        font-weight: @hoverWeight;
      }
    }

    .user-enty {
      margin-left: 20px;

      a.login {
        color: @hoverColor;
        margin-right: 10px;
      }

      a.register:hover {
        color: @hoverColor;
        font-weight: @hoverWeight;
      }
    }
  }
}
</style>