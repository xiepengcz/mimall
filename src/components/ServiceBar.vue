<template>
  <div class="service">
    <ul>
      <li>
        <a href="javascript:;"><span class="icon-setting"></span>预约维修服务</a>
      </li>
      <li>
        <a href="javascript:;"><span class="icon-7day"></span>7天无理由退货</a>
      </li>
      <li>
        <a href="javascript:;"><span class="icon-15day"></span>15天免费换货</a>
      </li>
      <li>
       <a href="javascript:;"> <span class="icon-post"></span>满99元包邮</a>
      </li>
      <li>
        <a href="javascript:;"><span class="icon-service"></span>520余家售后网点</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'service-bar'
}
</script>

<style lang="scss">
@import './../assets/sass/mixin.scss';
.service {
  width: 1226px;
  padding: 33px 0;
  color: #666;
  font-size: 16px;
  text-align: center;
  display: flexbox;
  margin: 0 auto;
  li {
    display: inline-block;
    width: 19.8%;
    border-right: 1px solid #e5e5e5;
    a{
      color: #666;
    }
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: -4px;
      margin-right: 8px;
    }
    .icon-setting {
      @include bgImg(20px, 20px, '/imgs/icon-setting.png');
    }
    .icon-7day {
      @include bgImg(20px, 20px, '/imgs/icon-7day.png');
    }
    .icon-15day {
      @include bgImg(20px, 20px, '/imgs/icon-15day.png');
    }
    .icon-post {
      @include bgImg(20px, 20px, '/imgs/icon-post.png');
    }
    .icon-service {
      @include bgImg(20px, 20px, '/imgs/icon-loc.png');
    }
  }
  :last-of-type {
    border-right: none;
  }
}
</style>
