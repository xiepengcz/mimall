<template>
  <div>
    <product-param class="product-param"></product-param>
    <div class="detail">
      <!-- 左侧轮播图 -->
      <div class="container clearfix">
        <div class="pro-view fl">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in slideList" :key="index">
              <img :src="item" alt />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <div class="pro-info fr">
          <span class="name">小米CC9</span>
          <p
            class="desc"
          >「6GB+128GB购机赠10000mAh充电宝或半入耳式耳机」前置3200万自拍 / 索尼4800万超广角三摄 / 多色炫彩轻薄机身 / 6.39英寸三星 AMOLED水滴屏 /4030mAh大电量 / 骁龙710处理器 / 屏幕指纹 / NFC功能 / 红外遥控功能 / Game Turbo2.0游戏加速</p>
          <p class="company desc">小米自营</p>
          <div class="pro-price">
            <span class="price">
              1699元
              <span>1999元</span>
            </span>
          </div>
          <div class="adderss">
            <i></i>
            <div class="addr">广东 广州市 荔湾区 白鹤洞街道</div>
            <div class="stock">有现货</div>
          </div>
          <div class="list-warp">
            <div class="versions">
              <div class="title">选择版本</div>
              <ul class="step-list">
                <li class="fl">
                  <a href>
                    <span>6GB+128GB</span>
                    <span class="price">1699元</span>
                  </a>
                </li>
                <li class="fr">
                  <a href>
                    <span>6GB+64GB</span>
                    <span class="price">1499元</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="colors">
              <div class="title">选择颜色</div>
              <ul class="step-list">
                <li class="fl">
                  <a href>
                    <span>深蓝星球（蓝色）</span>
                  </a>
                </li>
                <li class="fr">
                  <a href>
                    <span>白色恋人（白色）</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="total">
            <li class="addr">小米CC9 6GB+128GB 深蓝星球</li>
            <span>1699元</span>
            <li class="stock">总计： 1699元</li>
          </div>
          <div class="btn btn-huge" @click="addCart">
            <a href="javascript:;">加入购物车</a>
          </div>
        </div>
      </div>
      <div class="container info">
        <p>价格说明</p>
        <img src="/imgs/detail/item-price.jpeg" alt />
      </div>
      <service-bar></service-bar>
    </div>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam'
import ServiceBar from '../components/ServiceBar'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'detail',
  components: {
    ProductParam,
    ServiceBar,
    swiper,
    swiperSlide
  },
  data() {
    return {
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
        '/imgs/detail/phone-1.jpg',
        '/imgs/detail/phone-2.jpg',
        '/imgs/detail/phone-3.jpg',
        '/imgs/detail/phone-4.jpg'
      ]
    }
  },
  methods: {
    addCart() {
      const id = this.$route.params.id
      this.axios
        .post('/carts', {
          productId: id,
          selected: true
        })
        .then((res = { cartProductVoList: 0 }) => {
          this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
        })
    }
  }
}
</script>

<style lang="scss">
@import './../assets/sass/mixin.scss';
@import './../assets/sass/config.scss';
.detail {
  padding-top: 32px;
  .pro-view {
    width: 560px;
    img {
      width: 560px;
      height: 100%;
    }
  }
  .pro-info {
    width: 606px;
    .name {
      font-size: 24px;
    }
    .desc {
      font-size: 14px;
    }
    .company {
      color: $colorA;
      margin-top: 14px;
    }
    .pro-price {
      margin: 12px 0 20px;
      .price {
        font-size: 18px;
        color: $colorA;
        span {
          margin-left: 10px;
          color: $colorE;
          text-decoration: line-through;
          font-size: 14px;
        }
      }
    }
    .adderss {
      height: 104px;
      background-color: #fafafa;
      border: 1px solid #ccc;
      position: relative;
      font-size: 14px;
      i {
        position: absolute;
        display: block;
        width: 14px;
        height: 20px;
        background: url('/imgs/icon-loc.png') no-repeat 50%;
        background-size: contain;
        top: 30px;
        left: 30px;
      }
      .addr {
        display: inline-block;
        margin: 30px 0 0 50px;
      }
      .stock {
        margin: 4px 0 0 50px;
        color: $colorA;
      }
    }
    .list-warp {
      margin-top: 10px;
      .title {
        font-size: 18px;
      }
      .step-list {
        height: 60px;
        font-size: 16px;
        color: $colorA;
        margin-top: 10px;
        li {
          width: 290px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border: 1px solid $colorA;
          margin-right: 14px;
          &:nth-child(2n) {
            margin-right: 0;
          }
          a {
            color: $colorA;
          }
        }
        .price {
          color: $colorC;
          margin-left: 10px;
        }
      }
    }
    .total {
      height: 104px;
      background-color: #fafafa;
      position: relative;
      font-size: 14px;
      li {
        display: inline-block;
        padding: 20px 0 0 50px;
      }
      span {
        float: right;
        margin-top: 20px;
        margin-right: 60px;
      }
      .stock {
        display: block;
        padding: 20px 0 0 50px;
        color: $colorA;
        font-size: 24px;
      }
    }
    .btn {
      margin: 40px 0;
      a {
        color: #fff;
      }
    }
  }
  .info {
    p {
      font-size: 22px;
    }
    img {
      height: 189px;
    }
  }
}
</style>
