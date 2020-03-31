<template>
  <div class="product">
    <product-param>
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-param>
    <div class="cc9">
      <div class="section1">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <h1>小米CC9</h1>
            <p>3200万+4800万 前后双旗舰相机</p>
            <img :src="item" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
      </div>
      <div class="section2">
        <div class="specs">
          <ul>
            <li v-for="(item, index) in specsList" :key="index">
              <img :src="item.img" alt />
              <span>{{item.state}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="video-box">
        <div class="bg">
          <div class="img">
            <img src="/imgs/product/bg.jpg" alt />
          </div>
          <a href="javascript:;" @click="videoStart"></a>
        </div>
        <div class="overlay" v-if="showSlide" @click="videoStart(1)"></div>
        <div class="video" :class="{'slide':showSlide}">
          <span class="icon-close" @click="videoStart(1)"></span>
          <video
            id="videoPlay"
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2beda28bbe8748f5fb2d6a69428d9a4e.mp4"
            controls="controls"
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'product',
  components: {
    ProductParam,
    swiperSlide,
    swiper
  },
  data() {
    return {
      // 控制视频动画
      showSlide: false,
      swiperOption: {
        autoplay: {
          delay: 6000
        },
        loop: true,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        '/imgs/product/intro-1.jpg',
        '/imgs/product/intro-2.jpg',
        '/imgs/product/intro-3.jpg'
      ],
      specsList: [
        { img: '/imgs/product/specs-01.png', state: '3200万真我质感自拍' },
        { img: '/imgs/product/specs-02.png', state: '索尼4800万超清三摄' },
        { img: '/imgs/product/specs-03.png', state: '三星AMOLED屏幕' },
        { img: '/imgs/product/specs-04.png', state: '第七代光感屏幕指纹' },
        {
          img: '/imgs/product/specs-05.png',
          state: '3D全曲面玻璃机身金属中框'
        },
        { img: '/imgs/product/specs-06.png', state: '4030mAh大电量' },
        { img: '/imgs/product/specs-07.png', state: '骁龙710 处理器' },
        { img: '/imgs/product/specs-08.png', state: '多功能NFC' }
      ]
    }
  },
  methods: {
    videoStart(i) {
      const videoEle = window.document.getElementById('videoPlay')
      if (i === 1) {
        videoEle.pause()
        this.showSlide = false
      } else {
        this.showSlide = true
        videoEle.load()
        videoEle.play()
      }
    },
    buy() {
      const id = this.$route.params.id
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style lang="scss">
@import './../assets/sass/mixin.scss';
.product {
  .btn {
    margin-left: 10px;
  }
  .cc9 {
    .section1 {
      height: 1148px;
      text-align: center;
      img {
        height: 1160px;
      }
      h1 {
        position: absolute;
        font-size: 100px;
        color: #ff6600;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
      }
      p {
        position: absolute;
        font-size: 24px;
        font-weight: 100;
        letter-spacing: 4px;
        color: #fff;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 190px;
      }
      swiper {
        z-index: 1;
      }
    }
    .section2 {
      height: 500px;
      width: 1226px;
      position: relative;
      margin-right: auto;
      margin-left: auto;
      ul {
        padding: 40px 0;
        display: table;
        text-align: center;
        li {
          width: 251px;
          height: 210px;
          display: inline-block;
          padding: 10px;
          overflow: hidden;
          img {
            display: block;
            width: 250px;
          }
          span {
            font-size: 18px;
            display: block;
            height: 40px;
            line-height: 40px;
            width: 250px;
            border-radius: 0 0 10px 10px;
            background-color: #f0f0f1;
          }
        }
      }
    }
    .video-box {
      .bg {
        width: 1226px;
        height: 605px;
        position: relative;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
        .img {
          height: 605px;
          background: #000;
          display: inline-block;
          border-radius: 10px;
          img {
            height: 605px;
            border-radius: 10px;
            opacity: 0.6;
            filter: alpha(opacity=60);
          }
        }
        a {
          width: 117px;
          height: 117px;
          background: url('/imgs/product/play.png') 50% 0 no-repeat;
          display: inline-block;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -58px;
          margin-top: -58px;
        }
      }
      .overlay {
        @include position(fixed);
        background-color: #333;
        opacity: 0.5;
        z-index: 2;
      }
      .video {
        position: fixed;
        top: -50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1000px;
        height: 536px;
        z-index: 10;
        opacity: 0;
        transition: all 0.6s;
        &.slide {
          top: 50%;
          opacity: 1;
        }
        .icon-close {
          @include bgImg(20px, 20px, '/imgs/icon-close.png');
          border-radius: 50%;
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
          z-index: 11;
          &:hover {
            background-color: red;
          }
        }
        video {
          z-index: 10;
          width: 100%;
          height: 100%;
          object-fit: cover;
          outline: none;
        }
      }
    }
  }
}
</style>
