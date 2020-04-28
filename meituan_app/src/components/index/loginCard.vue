<template>
  <div class="login-container">
      <div class="avatar-box">
          <img src="@/assets/images/avatar.jpg" class="avatar">
      </div>
      <p class="user-name">Hi! 你好</p>
      <router-link class="btn" to="/register">注册</router-link>
      <router-link class="btn" to="/login">立即登录</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">

.login-container {
    width: 230px;
    height: 240px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .avatar-box {
        border-radius: 30px;
        margin: 0px auto 4px auto;

        .avatar {
            width: 47px;
            height: 47px;
            border-radius: 50%;
            border: 4px solid #E5E5E5;
        }
    }

    .user-name {
        font-size: 16px;
        color: #222;
        text-align: center;
        font-weight: 500;
        white-space: nowrap;
        width: 6em;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 auto;
    }

    .btn {
        width: 118px;
        text-align: center;
        margin: 10px auto 15px auto;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 40px;
        font-size: 14px;
        color: #333;
        transition: background-color 0.5s;
        display: block;
        line-height: 38px;

        &:hover {
            background-color: #f6f6f6;
        }
    }
}

</style>