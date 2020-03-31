<template>
  <div>
    <div class="nav-bar">
      <div class="container">
        <div class="pro-title">小米CC9</div>
        <div class="pro-param">
          <a href="javascript:;">概述</a>
          <span>|</span>
          <a href="javascript:;">参数</a>
          <span>|</span>
          <a href="javascript:;">用户评价</a>
          <slot name="buy"></slot>
        </div>
      </div>
    </div>
    <div>
      <div class="nav-bar hidden" :class="{'is_fixed':isFixed}">
        <div class="container">
          <div class="pro-title">小米CC9</div>
          <div class="pro-param">
            <a href="javascript:;">概述</a>
            <span>|</span>
            <a href="javascript:;">参数</a>
            <span>|</span>
            <a href="javascript:;">用户评价</a>
            <slot name="buy"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      isFixed: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      this.isFixed = scrollTop > 200
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>

<style lang="scss">
@import './../assets/sass/mixin.scss';
@import './../assets/sass/config.scss';
.nav-bar {
  height: 70px;
  line-height: 70px;
  border: 1px solid $colorH;
  background-color: $colorG;
  box-shadow: 0 3px 3px #cccccc45;
  &.is_fixed {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    display: block;
  }
  .container {
    @include flex();
    .pro-title {
      font-size: $fontH;
      color: $colorB;
    }
    .pro-param {
      font-size: $fontJ;
      a {
        color: $colorC;
        &:hover {
          color: $colorA;
        }
      }
      span {
        margin: 0 10px;
        color: $colorC;
      }
    }
  }
}
.hidden {
  top: -100px;
  position: fixed;
  width: 100%;
  transition: top 0.3s linear;
}
</style>