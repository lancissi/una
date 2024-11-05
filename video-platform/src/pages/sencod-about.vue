<template>
  <div class="page">
    <!-- <a href="https://www.wix.com/lpviral/enviral?utm_campaign=vir_wixad_live&adsVersion=white&orig_msid=e2e42cee-e3ea-4da0-9455-f562c1312c90" target="_blank" class="head">
      <div class="content">
        <span>This site was designed with the</span>
        <span> Wix</span>
        <span>.com</span>
        <span>website builder. Create your website today.</span>
        <button class="content__button">Start Now</button>
      </div>
    </a> -->
    <div class="body">
      <div class="avatar" >
        <img src="../assets/images/avatar.webp" style="flex-grow: 0; width: 80px;height: 80px; margin: 20px 0;"/>
        <div style="transform-origin: center 0.5px;height:1px ;width:100%; background-color: rgb(2, 2, 2)"/>
        <div style="margin: 10px 0;">​我是月荧una，你亲爱的运营，感谢您来做主播，你是我跌</div>
      </div>
      <div style="margin:80px 40px;  font-size: 16px;">
        <div style="font-size: 56px; margin-bottom: 40px;">
​谢谢您！！最喜欢的一集</div>
        <div style="line-height: 1.8em">进入此页面说明您已不用我教了，太好了！！！！
</div>
        <div style="line-height: 1.8em ;margin-bottom: 30px">最真诚的一集！</div>
        <div style="line-height: 1.8em; margin-bottom: 30px">不过还是建议您看看una能提供的额外服务，点击以下按钮跳转</div>
        <div style="line-height: 1.8em ;margin-bottom: 30px">（btw我是您随时随地可召唤的赛博老奴，有事请找）</div>
        <div  style="width: 190px;height: 46px;background-color: #000;color: #fff;text-align: center;display: flex;align-items: center;justify-content: center;" @click="$router.push('about-7-1')">不完全进阶服务清单</div>
      </div>

      <div style="background-color: #dfdfdfcc; display: flex; padding: 40px; margin-bottom: 100px">
        <div style="margin-right: 100px">
          <div style="margin-bottom: 20px;">联系方式：</div>
          <div >572080280</div>
          <div style="margin-top: 10px">lancissi_hqz</div>
        </div>
        <div>
          <div style="margin-bottom: 20px;">Email </div>
          <div>​samzeonwong@outlook.com</div>
        </div>
      </div>

    </div>
    <div style="font-size: 14px; margin-bottom: 40px">©2024 una做运营，成功主播的第一步 版權所有。</div>
  </div>
</template>
<style lang="scss">
.page {
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.head {
    background: #eff1f2;
    border-bottom: 3px solid #a0138e;
    box-sizing: border-box;
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    text-decoration: none;
    position: fixed;
    .content {
      align-items: center;
      display: flex;
      color: #20303c;
      font-size: 14px;
      &__button {
        border: 1px solid #a0138e;
      border-radius: 17px;
      color: #a0138e;margin-left: 6px; font-size: 14px;
      height: 35px;
      justify-content: center;
      text-align: center;
      width: 112px;
      }
    }
}
.body {
  // margin-top: 50px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    min-height: auto;
    grid-template-rows: repeat(2, min-content) 1fr;
    grid-template-columns: 100%;
    text-align: center;
  }
  .una {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    min-height: 614px;
    grid-template-rows: min-content 1fr;
    grid-template-columns: 100%;
    background-color: rgb(223, 223, 223);
    text-align: center;
    color: rgb(2, 2, 2);
    margin-bottom: 100px;
  }
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    min-height: 614px;
    background-color: #cfc5c6;
    text-align: center;
    color: rgb(2, 2, 2);
      &__all {
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
      }
      &__text {
        line-height: 1.875em;
        text-align: center;
        font-size: 15px;
        margin-bottom: 30px
      }
  }
  .selection {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
    &__text {
      margin: 40px 0;
    }
    &__button {
      width: 458px;
      height: 46px;
      background-color: #000;
      color: #fff;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
