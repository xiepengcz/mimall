<template>
  <div class="footer">
    <div class="footer-box">
      <div class="footer-logo">
        <img src="/imgs/logo-footer.png" width="60px" alt />
      </div>
      <img class="footer-img" src="https://cnbj1.fds.api.xiaomi.com/staticsfile/global/slogan2020.png" alt />
      <div class="footer-link">
        <a href="javascript:;">小米商城</a> |
        <a href="javascript:;">MIUI</a> |
        <a href="javascript:;">米家</a> |
        <a href="javascript:;">米聊</a> |
        <a href="javascript:;">多看</a> |
        <a href="javascript:;">游戏</a> |
        <a href="javascript:;">政企服务</a> |
        <a href="javascript:;">小米天猫店</a> |
        <a href="javascript:;">小米集团隐私政策</a> |
        <a href="javascript:;">小米商城隐私政策</a> |
        <a href="javascript:;">小米商城用户协议</a>
        <br />
        <a href="javascript:;">© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</a>
        <br />
        <a href="javascript:;">
          (京) 网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京)-非经营性-2014-0090 营业执照 医疗器械质量公告
          <br />增值电信业务许可证 网络食品经营备案（京）【2018】WLSPJYBAHF-12 食品经营许可证
          <br />违法和不良信息举报电话：185-0130-1238 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss">
.footer {
  text-align: center;
  height: 200px;
  border-top: 4px solid #ff6600;
  background-color: #333;
  color: #999;
  font-size: 12px;
  .footer-img{
    margin: 140px;
  }
  .footer-box {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    position: relative;
    height: 200px;
    width: 1260px;
    .footer-logo {
      position: absolute;
      display: inline-block;
      margin-top: 40px;
      left: 250px;
    }
    .footer-link {
      position: absolute;
      text-align: left;
      top: 40px;
      left: 320px;
      a {
        color: #999;
      }
      img{
        text-align: center;
      }
    }
  }
}
</style>
