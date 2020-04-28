<template>
  <div class="header-nav">
    <ul>
      <li class="has-child">
        <router-link to="/">我的美团</router-link>
        <dl class="dl-base header-nav-own">
          <dd><a href="javascript:;">我的订单</a></dd>
          <dd><a href="javascript:;">我的收藏</a></dd>
          <dd><a href="javascript:;">抵用券</a></dd>
          <dd><a href="javascript:;">账户设置</a></dd>
        </dl>
      </li>
      <li>
        <router-link to="/">手机APP</router-link>
      </li>
      <li class="has-child">
        商家中心
        <dl class="dl-base header-nav-merchant">
          <dd><a href="javascript:;">美团餐饮商户中心</a></dd>
          <dd><a href="javascript:;">登录商家中心</a></dd>
          <dd><a href="javascript:;">美团智能收银</a></dd>
          <dd><a href="javascript:;">我想合作</a></dd>
          <dd><a href="javascript:;">手机免费开店</a></dd>
          <dd><a href="javascript:;">餐饮代理商招募</a></dd>
          <dd><a href="javascript:;">商家申请开票</a></dd>
          <dd><a href="javascript:;">免费合作美团排队</a></dd>
        </dl>
      </li>
      <li class="has-child">
        美团规则
        <dl class="dl-base header-nav-own">
          <dd><a href="javascript:;">规则中心</a></dd>
          <dd><a href="javascript:;">规则目录</a></dd>
          <dd><a href="javascript:;">规则评议院</a></dd>
        </dl>
      </li>
      <li class="has-child">
        网站导航
        <div class="sub-container header-nav-site">
          <!-- travel -->
          <dl class="header-nav-third header-jiunv">
            <dt>酒店旅游</dt>
            <dd v-for="hotelItem in travelHotelList" :key="hotelItem"><router-link to="/">{{ hotelItem }}</router-link></dd>
          </dl>
          <!-- foods -->
          <dl class="header-nav-third header-meishi">
            <dt>吃美食</dt>
            <dd v-for="foodsItem in deliciousFoodsList" :key="foodsItem"><router-link to="/">{{ foodsItem }}</router-link></dd>
          </dl>
          <!-- movie -->
          <dl class="header-nav-third header-movie">
            <dt>看电影</dt>
            <dd v-for="movieItem in movieList" :key="movieItem"><router-link to="/">{{ movieItem }}</router-link></dd>
          </dl>
          <!-- app -->
          <dl class="header-nav-third header-app">
            <dt>手机应用</dt>
            <dd>
              <router-link to="/">
                <img class="appicon" title="美团app" alt="美团app" src='@/assets/images/meituan.png'>
              </router-link>
            </dd>
            <dd>
              <router-link to="/">
                <img class="appicon" title="外卖app" alt="外卖app" src='@/assets/images/waimai.png'>
              </router-link>
            </dd>
            <dd>
              <router-link to="/">
                <img class="appicon" title="民宿app" alt="民宿app" src='@/assets/images/minsu.png'>
              </router-link>
            </dd>
            <dd>
              <router-link to="/">
                <img class="appicon" title="点评app" alt="点评app" src='@/assets/images/dianping.png'>
              </router-link>
            </dd>
            <dd>
              <router-link to="/">
                <img class="appicon" title="猫眼app" alt="猫眼app" src='@/assets/images/maoyan.png'>
              </router-link>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      travelHotelList: ['国际酒店', '火车票', '民宿', '经济型酒店', '主题酒店', '商务酒店', '公寓', '豪华酒店', '客栈', '青年旅社', '度假酒店', '别墅', '农家院'],
      deliciousFoodsList: ['烤鱼', '特色小吃', '烧烤', '自助餐', '火锅', '代金券'],
      movieList: ['热映电影','热门影院','热映电影口碑榜','最受期待电影','国内票房榜','北美票房榜','电影排行榜'],
    }
  }

}
</script>

<style scoped lang="less">
  .header-nav {
      ul {
        display: flex;
        justify-content: flex-end;

        li {
          position: relative;
          padding: 0 14px;
          box-sizing: border-box;
          height: 40px;

          a {
            color: #999;
            display: block;

            &:hover {
              color: #fe8c00;
            }
          }
          &.has-child:hover {
            color: #FE8C00;
            background-color: #fff;
            border-color: #E5E5E5;
            box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
          }

          &.has-child:hover dl,
          &.has-child:hover .sub-container {
            display: block;
          }

          .dl-base {
            position: absolute;
            display: none;
            right: 0px;
            top: 95%;
            text-align: center;
            background-color: #fff;
            box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            z-index: 1000;

            &.header-nav-own {
              width: 100%;
            }
            &.header-nav-merchant {
              width: 140%;
              border-top-left-radius: 4px;
            }

            .header-nav-third {
              float: left;
              margin-right: 47px;

              dt {
                margin-bottom: 26px;
                font-size: 14px;
                color: #222222;
                font-weight: 500;
              }
            }
            .header-jiunv {
              width: 234px;

              dd {
                width: 33%;
                float: left;
                text-align: center;
              }
            }
            .header-meishi {
              width: 156px;

              dd {
                width: 50%;
                text-align: center;
                float: left;
              }
            }
            .header-movie {
              width: 90px;
            }
            .header-app {
              float: right;

              dd {
                display: inline-block;
                margin: 0 8px;

                a {
                  display: block;
                  padding: 5px 0;

                  .appicon {
                    width: 60px;
                    height: 60px;
                    border: 0;
                  }
                }
              }
            }
          }
          
          .header-nav-site {
            .dl-base();
            width: 1200px;
            box-sizing: border-box;
            border-top-left-radius: 4px;
            padding: 30px 36px 36px 47px;
          }
        }
      }
  }
</style>