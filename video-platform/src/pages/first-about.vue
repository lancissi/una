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
        <div style="font-size: 56px; margin-bottom: 40px;">从零开始的BigV生活</div>
        <div style="line-height: 1.8em">成为bigv的第一步，你需要有：</div>
        <div style="line-height: 1.8em">•一个工作用的QQ&建立粉丝群（并将你亲爱的工具人una扔进去）</div>
        <div style="line-height: 1.8em">•VTS（Vtube Studio）</div>
        <div style="line-height: 1.8em">•OBS （推流软件）</div>
        <div style="line-height: 1.8em">•VTS（Vtube Studio）</div>
      </div>

      <div style="padding: 80px ;background-color: #dfdfdfcc">
        <div style="display: flex;flex-direction: column; align-items: center; margin-bottom:100px">
          <div style="font-size: 56px;">•​从零开始的软件操作</div>
          <div style="margin-top: 40px">如果您不了解/不够了解OBS&VTS的操作，</div>
          <div style="margin-bottom: 40px">​请点击以下按钮</div>
          <div style="width: 160px;height: 46px;background-color: #000;color: #fff;text-align: center;display: flex;align-items: center;justify-content: center;" @click="handleObs">​点击速通obs/vts</div>
        </div>
        <div>
          <div style="font-size: 56px;">从零开始的bigv预热生活</div>
          <div style="display: flex; justify-content: space-between; width: 100%; margin-top: 40px">
            <div>
              <div style="margin-bottom: 10px;">0-2天</div>
              <div>公主请制作素材包</div>
            </div>
            <div style="width: 70%;">
              <div>亲爱的美女 你可能想问：</div>
              <div>1.什么是素材包？答：做垃圾短视频用的，一劳永逸</div>

              <div>2.如何制作一个素材包？ 答：把你的模型和ui扔进obs里开录完事。</div>

              <div>内容涵盖：带背景 特写皮套的每一个镜头并且改名（比如《头部》《衣服》《整体特写》《表情动作》等 + 用vts拍若干张能作为封面素材的透明底照片，打包成一个压缩文件夹发给我</div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; width: 100%; margin-top: 40px">
            <div>
              <div style="margin-bottom: 10px;">3-6天</div>
              <div>公主请策划首播</div>
            </div>
            <div style="width: 70%;">
              <div>这期间发生的事：</div>
              <div>1.你的工具人运营将快马加鞭制作模型展示等短视频</div>

              <div>2.你将建立一个粉丝群+策划直播内容+提交首播一份九宫格素材</div>

              <div>内容涵盖：带背景 特写皮套的每一个镜头并且改名（比如《头部》《衣服》《整体特写》《表情动作》等 + 用vts拍若干张能作为封面素材的透明底照片，打包成一个压缩文件夹发给我</div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; width: 100%; margin-top: 40px">
            <div>
              <div style="margin-bottom: 10px;">5-10天</div>
              <div>公主进行直播间装修</div>
            </div>
            <div style="width: 70%;">
              <div>当发布了视频若干+九宫格直播预约后：</div>
              <div>​你将学习直播间的装修，（若完成）你将享受一段无与伦比的假期，期间你可以策划直播内容+好好休息+（如果你是劳模）可以录点歌+策划后续视频内容</div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 50px;background-color: #dfdfdfcc; padding: 80px; display: flex; align-items: center; flex-direction: column;font-size: 18px;">
        <div style="font-size: 56px;">•​从零开始的直播间装修</div>
        <div style="margin-top: 40px">若果您不清楚/不太清楚直播间装修的思路/操作</div>
        <div style="margin-bottom: 40px">​请点击以下按钮</div>
        <div  style="width: 190px;height: 46px;background-color: #000;color: #fff;text-align: center;display: flex;align-items: center;justify-content: center;" @click="handleSuTong">点击速通直播间装修</div>

        <div style="font-size: 56px; margin-top: 80px;margin-bottom: 40px;">•一些小tips，公主请过目</div>
        <div style="line-height: 1.8em;">•（时间充裕的情况下）请您活跃于粉丝/舰长群</div>
        <div style="line-height: 1.8em;">•请您不吝惜您的分享欲，成为动态话痨</div>
        <div style="line-height: 1.8em;">•请您积极策划活动（可以找运营一起想）</div>
        <div style="line-height: 1.8em;">•欢迎您随时找运营分享直播的新点子，将它变成现实</div>
        <div style="line-height: 1.8em;">•活动的推流申请，请关注工作群</div>
        <div style="line-height: 1.8em;">•欢迎您积极找运营申请星光</div>
        <div style="line-height: 1.8em;">•周表是一定要发的，求求您</div>
        <div style="line-height: 1.8em;">•航海礼物相关请访问《重生之我还是懂一点的》</div>
        <div style="line-height: 1.8em;">•非常期待您的视频更新，运营将不胜荣幸为您分担剪辑/美工/修音工作</div>
      </div>

      <div style="display: flex; justify-content: space-between; height: 400px">
        <div style="background-color: #000; color:#fff;width: 50%; padding: 40px">
          <div style="font-size: 56px;">辛苦了跌！！</div>
          <div style="font-size: 18px; margin-top: 10px">——</div>
        </div>
        <div style="display: flex; flex-direction: column;  justify-content: center; padding: 80px">
          <div>当您看到这一页的时候，前期预热的活动已经接近尾声，您已迈出成为优秀主播的第一步！
          </div>
          <div style="margin-top: 40px">感谢您付出的努力！红豆泥阿里嘎多！</div>
        </div>
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
  <script setup lang="ts">

  function handleObs() {
    window.open("https://www.bilibili.com/video/BV1i94y1Z79t/?spm_id_from=333.337.search-card.all.click")
  }

  function handleSuTong() {
    window.open("https://www.bilibili.com/video/BV1hD4y1T7Js/?spm_id_from=333.337.search-card.all.click")
  }

</script>
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
