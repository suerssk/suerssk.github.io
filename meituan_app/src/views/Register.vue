<template>
  <div class="register-page">
    <el-header>
      <div class="content-center header">
        <router-link to="/" class="logo">美团</router-link>
        <div class="to-login">
          <span class="tip">已有美团账号？</span>
          <router-link to="login">登录</router-link>
        </div>
      </div>
    </el-header>
    <el-main>
      <div class="content-center">
        <div class="sheet">
          <form>
            <div class="form-item">
              <label for="phone">手机号</label>
              <input type="text" id="phone" />
            </div>
            <div class="form-item">
              <input type="button" class="get-sms" value="免费获取短信动态码" />
            </div>
            <div class="form-item">
              <label for="sms_code">短信动态码</label>
              <input type="text" id="sms_code" />
            </div>
            <div class="form-item">
              <label for="pwd">创建密码</label>
              <input type="password" id="pwd" />
            </div>
            <div class="form-item p-0">
              <div class="strength">
                <span class="pw-strength">弱</span>
                <span class="pw-strength">中</span>
                <span class="pw-strength">强</span>
              </div>
            </div>
            <div class="form-item">
              <label for="pwd2">确认密码</label>
              <input type="password" id="pwd2" />
            </div>
            <div class="form-item">
              <input type="submit" class="btn" value="同意以下协议并注册" />
            </div>
            <div class="form-item">
              <router-link to="/" class="f1">《美团点评用户服务协议》</router-link>
              <router-link to="/" class="f1">《美团点评隐私政策》</router-link>
            </div>
          </form>
        </div>
      </div>
    </el-main>
    <el-footer>
      <div class="content-center m-footer">
        ©
        <router-link to="/">meituan.com</router-link>&nbsp;
        <router-link to="/">京ICP证070791号</router-link>&nbsp;京公网安备11010502025545号
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.content-center {
  width: 980px;
  margin: 0 auto;
}

.el-header {
  border-bottom: 2px solid #d8d8d8;
  min-width: 980px;
  color: #666;

  .header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: inline-block;
      width: 128px;
      height: 36px;
      background: url("../assets/images/logo.png") no-repeat;
      background-size: contain;
      overflow: hidden;
      text-indent: -9999px;
    }

    .to-login {
      span {
        margin-right: 10px;
      }
      a {
        font-size: 12px;
        padding: 3px 10px;
        border-radius: 3px;
        color: #222;
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        border-width: 0;
        box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
        background-size: 100%;
      }
    }
  }
}

.el-main {
  padding: 0;

  .sheet {
    margin: 0 auto 30px;
    padding-top: 30px;
    min-height: 300px;

    .form-item {
      position: relative;

      padding: 8px 0 8px 110px;
      zoom: 1;

      label {
        position: absolute;
        left: 0;
        top: 14px;
        width: 100px;
        padding-top: 6px;
        font-size: 14px;
        text-align: right;
        color: #333;
      }

      input {
        width: 248px;
        height: 24px;
        padding: 5px;
        border: 1px solid #aaa;
        line-height: 24px;

        &:focus {
          outline-color: #ffc300;
        }
      }

      .get-sms {
        font-size: 12px;
        color: #333;
        background-image: linear-gradient(to bottom, #f7f7f7, #dedede);
        border: 1px solid #ddd;
        border-radius: 2px;
        display: inline-block;
        width: 120px;
        padding: 0;
        cursor: pointer;
        outline: none;

        &:active {
          background-image: linear-gradient(to bottom, #ddd, #eee);
        }
      }

      &.p-0 {
        padding: 0 0 0 110px;

        .strength {
          position: relative;
          display: flex;
          width: 260px;

          .pw-strength {
            display: inline-block;
            text-align: center;
            font-size: 12px;
            height: 20px;
            line-height: 20px;
            width: 85px;
            border-right: 2px solid #f8f8f8;
            color: #ddd;
            background-color: #fff;

            &:last-child {
              border-right: none;
            }
          }
        }
      }

      .btn {
        display: inline-block;
        font-size: 14px;
        font-weight: 700;
        line-height: 1.5;
        border-radius: 2px;
        cursor: pointer;
        color: #222;
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        border-width: 0;
        box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
        background-size: 100%;
        padding-top: 10px;
        padding-bottom: 25px;

        &:focus {
          outline: none;
        }
      }

      .f1 {
        font-size: 13px;
        color: #fe8c00;
      }
    }
  }
}

.el-footer {
  border-top: 1px solid #eee;
  text-align: center;

  .m-footer {
    padding-top: 20px;
    font-size: 12px;
    color: #999;

    a {
      color: #999;
    }
  }
}
</style>