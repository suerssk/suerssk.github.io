<template>
  <div class="download-container">
      <div class="qrcode">
          <img src="@/assets/images/qrcode.png" alt="下载App">
      </div>
      <p class="app-name">美团APP手机版</p>
      <p class="sl">
          <span class="red">1元起</span>
          <span class="gray">吃喝玩乐</span>
      </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.download-container {
    width: 230px;
    height: 166px;
    box-sizing: border-box;
    margin-top: 10px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    text-align: center;

    .qrcode {
        margin: 10px auto 0;

        img {
            width: 95px;
            height: 95px;
        }
    }

    .app-name {
        font-size: 16px;
        color: #222;
        font-weight: 500;
    }
    .sl {
        font-size: 12px;
        font-weight: 500;
        margin-top: 2px;

        .red {
            color: #EC5330;
            margin-right: 5px;
        }
        .gray {
            color: #3f3f3f;
        }
    }
}


</style>