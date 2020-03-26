<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a class="menu-a" href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" :key="i">
                  <li v-for="(sub,j) in item" :key="j">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub?sub.img:'/imgs/item-box-2.png'" alt />
                      {{sub?sub.name:'小米10'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a class="menu-a" href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a class="menu-a" href="javascript:;">笔记本 显示器 平板</a>
            </li>
            <li class="menu-item">
              <a class="menu-a" href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a class="menu-a" href="javascript:;">出行穿戴</a>
            </li>
            <li class="menu-item">
              <a class="menu-a" href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a class="menu-a" href="javascript:;">电源配件</a>
            </li>
            <li class="menu-item">
              <a class="menu-a" href="javascript:;">健康 儿童</a>
            </li>
            <li class="menu-item">
              <a class="menu-a" href="javascript:;">耳机 音箱</a>
            </li>
            <li class="menu-item">
              <a class="menu-a" href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a :href="'/#/product/'+item.id">
              <img v-lazy="item.img" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/'+item.id" v-for="item in adsList" :key="item.id">
          <img v-lazy="item.img" alt />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href>
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr,i) in phoneList" :key="i">
              <div class="item" v-for="(item,j) in arr" :key="j">
                <span :class="{'new-pro':j%2==0}" v-if="j%2==0">新品</span>
                <span :class="{'kill-pro':j%2!==0}" v-else>秒杀</span>
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt />
                </div>
                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal title="提示" sureText="查看购物车" btnType="1" modalType="middle" :showModal="showModal" @submit="goToCart" @cancel="showModal=false">
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import Modal from '../components/Modal'

export default {
  name: 'index',
  components: {
    ServiceBar,
    Modal
  },
  data() {
    return {
      // 轮播
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
      // 轮播图片
      slideList: [
        {
          id: '42',
          img: '../imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '../imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '../imgs/slider/slide-3.jpg'
        }
      ],
      // 菜单信息
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: '红米K20 Pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G+'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      // 广告位信息
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        },
        {
          id: 34,
          img: '/imgs/ads/ads-2.jpg'
        },
        {
          id: 35,
          img: '/imgs/ads/ads-3.png'
        },
        {
          id: 36,
          img: '/imgs/ads/ads-4.jpg'
        }
      ],
      // 手机专区信息
      phoneList: [],
      showModal: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    // 获取手机专区信息
    init() {
      this.axios
        .get('/products', {
          params: {
            categoryId: 100012,
            pageSize: 14
          }
        })
        .then(res => {
          this.phoneList = [res.list.slice(6, 10), res.list.slice(10, 14)]
        })
    },
    // 添加商品到购物车
    addCart(id) {
      this.axios
        .post('/carts', {
          productId: id,
          selected: true
        })
        .then(res => {
          this.showModal = true
        })
        .catch(res => {
          this.showModal = true
        })
    },
    goToCart() {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss">
@import './../assets/sass/mixin.scss';
@import './../assets/sass/config.scss';
.index {
  .swiper-box {
    .nav-menu {
      z-index: 9;
      position: absolute;
      box-sizing: border-box;
      padding: 20px 0;
      height: 460px;
      width: 234px;
      background-color: #33333385;
      .menu-wrap {
        .menu-item {
          height: 42px;
          line-height: 42px;
          .menu-a {
            color: #fff;
            position: relative;
            padding-left: 30px;
            display: block;
            font-size: 14px;
            &:after {
              content: '';
              @include bgImg(14px, 10px, '/imgs/icon-arrow.png');
              position: absolute;
              right: 30px;
              top: 16px;
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 992px;
            height: 460px;
            position: absolute;
            left: 234px;
            top: 0px;
            background-color: #fff;
            box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.11);
            ul {
              display: flex;
              justify-content: space-between;
              height: 77px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 24px;
              }
              a {
                color: #333;
                font-size: 14px;
              }
              img {
                width: 45px;
                height: 38px;
                vertical-align: middle;
                margin-right: 14px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 460px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-button-prev {
      position: absolute;
      left: 244px;
      color: #333;
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 30px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              line-height: 24px;
              color: $colorG;
              font-size: 14px;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 195px;
                margin: 0 auto;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bolder;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: 18px;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  @include bgImg(18px, 18px, '/imgs/icon-cart-hover.png');
                  content: '';
                  vertical-align: middle;
                  margin-left: 4px;
                  margin-bottom: 2px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
