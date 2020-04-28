<template>
  <div class="login-page">
    <el-container>
      <el-header height>
        <router-link to="/" class="logo">美团网</router-link>
      </el-header>
      <el-main>
        <el-col :span="14" class="login-pic">
          <img src="@/assets/images/login_pic.jpg" alt />
        </el-col>
        <!-- login form -->
        <el-col :span="10" class="login-area">
          <div class="login-content">
            <form>
              <div class="login-header">
                <span>账号登录</span>
                <router-link to="/">
                  手机动态码登录
                  <i class="el-icon-mobile"></i>
                </router-link>
              </div>

              <div class="login-enter">
                <div class="form-item login-user">
                  <span>
                    +86
                    <i class="el-icon-arrow-right"></i>
                  </span>
                  <input type="text" name placeholder="手机号" />
                </div>
                <div class="login-pwd">
                  <i class="el-icon-unlock"></i>
                  <input type="password" name placeholder="密码" />
                </div>
                <div class="forget-pwd">
                  <router-link to="/">忘记密码？</router-link>
                </div>
                <div class="login-btn">
                  <input type="submit" value="登录" class="btn" />
                </div>

                <div class="login-register">
                  <span>还没有账号?</span>
                  <router-link to="/register">免费注册</router-link>
                </div>
              </div>
            </form>
            <div class="login-footer">
              <el-divider>用合作网站账号登录</el-divider>
              <div class="other-oauth">
                <a href="/">
                  <i class="iconfont icon-QQ"></i>
                </a>
                <a href="/">
                  <i class="iconfont icon-sina"></i>
                </a>
              </div>
            </div>
          </div>
        </el-col>
      </el-main>
      <el-footer height>
        <el-row class="links">
          <router-link to="/">关于美团</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link to="/">加入我们</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link to="/">商家入驻</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link to="/">帮助中心</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link to="/">美团手机版</router-link>
        </el-row>
        <el-row>
          <div class="copyright">
            <p>
              ©
              <span>2020</span>
              <a href="https://www.meituan.com">美团网团购</a>
              meituan.com
              <a
                href="http://www.miibeian.gov.cn/"
                target="_blank"
              >京ICP证070791号</a>
              京公网安备11010502025545号
            </p>
          </div>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import url("../assets/font/font.less");

.login-page {
  width: 980px;
  margin: 0 auto;

  .el-header {
    width: 100%;
    margin: 40px auto 30px;
    padding: 0;

    .logo {
      display: block;
      width: 83px;
      height: 54px;
      background-image: url("../assets/images/allPic.png");
      background-position: -188px -808px;
      background-repeat: no-repeat;
      text-indent: -9999px;
      overflow: hidden;
    }
  }

  .el-main {
    padding: 0;

    .login-area {
      height: 370px;
      display: flex;
      align-items: center;
    }

    .login-content {
      width: 270px;
      margin: 0 auto;

      input {
        background-color: #f8f8f8;
        border: none;
        height: 24px;
        line-height: 24px;
        padding: 5px;
        vertical-align: top;
        outline: none;
      }

      .login-header {
        display: flex;
        justify-content: space-between;

        span {
          font-weight: 400;
          color: #666;
        }
        a {
          font-size: 12px;
          color: #666;

          .el-icon-mobile {
            font-size: 16px;
          }
        }
      }

      .login-enter {
        .login-user,
        .login-pwd {
          box-sizing: border-box;
          width: 100%;
          border: 1px solid #aaa;
          margin: 8px 0;
          display: flex;
          align-items: center;
        }
        .login-user {
          span {
            color: #666;
            display: inline-block;
            padding-left: 5px;
          }

          input {
            width: 180px;
            padding-left: 5px;
            max-width: 200px !important;
          }
        }

        .login-pwd {
          i {
            padding: 0 5px;
            color: #999;
          }

          input {
            width: 100%;
          }
        }

        .forget-pwd {
          font-size: 12px;
          padding: 5px 0 10px;
          text-align: right;

          a {
            color: #fe8c00;
          }
        }

        .login-btn {
          padding-bottom: 8px;

          .btn {
            width: 100%;
            color: #222;
            background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
            border-width: 0;
            box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
            background-size: 100%;
            padding: 7px 20px 6px;
            border-radius: 2px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 700;
            line-height: 1.5;
            padding-bottom: 25px;
          }
        }

        .login-register {
          font-size: 14px;
          padding: 10px 0 5px;

          a {
            margin-left: 10px;
            color: #fe8c00;
          }
        }
      }

      .login-footer {
        .el-divider__text {
          background-color: #f8f8f8;
          padding: 0 3px;
        }
        .other-oauth {
          display: flex;
          justify-content: center;

          .iconfont {
            cursor: pointer;
            opacity: 0.5;
            transition: opacity 0.2s ease;

            &:hover {
              opacity: 1;
            }
          }

          .icon-QQ {
            color: #0c89ff;
          }

          .icon-sina {
            background-color: #fc6389;
            color: #fff;
            border-radius: 3px;
          }
        }
      }
    }
  }

  .el-footer {
    padding: 0;
    font-size: 12px;
    margin-top: 80px;
    margin-bottom: 30px;

    .links {
      padding: 20px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;

      a {
        color: #999;
      }
    }

    .copyright {
      margin-top: 20px;
      color: #999;

      a {
        color: #999;
      }
    }
  }
}
</style>