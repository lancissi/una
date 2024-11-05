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
      <div class="una">
        <div style="width: 780px;
    height: auto;
line-height: 1.25em;
    text-align: center;
    font-size: 72px; margin: 122px 0 67px 0;">UNA做运营，成功主播的第一步</div>
        <div style="font-size: 14px; margin-bottom:  10px ">​下拉开启成功主播的直播教学</div>
      </div>
      <div class="about">
        <div style="line-height: 1.35em;text-align: center;font-size: 40px;margin: 120px 0px ">ABOUT UNA（非常不要脸版）</div>
        <div class="about__all">
          <div class="about__text">​•若干年直播运营经验</div>
          <div class="about__text">•你亲爱的运营</div>
          <div class="about__text">•好说话，冤种</div>
          <div class="about__text">•专业诈骗教学</div>
          <div class="about__text">•首月百舰</div>
          <div class="about__text">•我是好人</div>
        </div>
      </div>
      <div class="selection">
        <div class="selection__text" style="font-size: 48px">​跌，来选一个</div>
        <div class="selection__button" @click="$router.push('about-7')">
          <span>重生之我完全不懂直播</span>
        </div>
        <div class="selection__text">重生之我还是懂一点的</div>
        <div class="selection__button" @click="$router.push('about-7-3')"><span>
          先天主播圣体（可以关掉了）
        </span></div>
        <div class="selection__text">推流/星光/banner/庆会申请/其他</div>
        <div class="selection__button" @click="$router.push('about-7-2')">
          <span>走过路过先把工资单填了,谢谢跌</span>
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
        margin-bottom:  10px ;
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
