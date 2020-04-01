<template>
  <div>
    <div class="header">
      <div class="nav-topbar">
        <div class="container">
          <div class="topber-menu">
            <a href="javascript:;">小米商城</a>
            <a href="javascript:;">MUI</a>
            <a href="javascript:;">云服务</a>
            <a href="javascript:;">协议规则</a>
          </div>
          <div class="topbar-user">
            <a href="javascript:;" v-if="username">{{username}}</a>
            <a href="javascript:;" v-if="!username" @click="login">登录</a>
            <a href="javascript:;" v-if="username" @click="logout">退出</a>
            <a href="javascript:;" v-if="username" @click="orderList">我的订单</a>
            <a href="javascript:;" v-if="!username">注册</a>
            <a href="javascript:;" class="my-cart" v-if="username" @click="goToCart">
              <span class="icon-cart"></span>
              购物车({{cartCount}})
            </a>
            <a href="javascript:;" class="my-cart" v-if="!username" @click="login">
              <span class="icon-cart"></span> 购物车
            </a>
          </div>
        </div>
      </div>
      <div class="nav-header">
        <div class="container">
          <div class="header-logo">
            <a href="/#/index"></a>
          </div>
          <div class="header-menu">
            <div class="item-menu">
              <span>小米手机</span>
              <div class="children">
                <ul>
                  <li class="product" v-for="(item,index) in phoneList" :key="index">
                    <a :href="'/#/product'+item.id" target="_blank">
                      <div class="pro-img">
                        <img :src="item.mainImage" alt />
                      </div>
                      <div class="pro-name">{{item.name}}</div>
                      <div class="pro-price">{{item.price | currency}}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-menu">
              <span>RedMi红米手机</span>
              <div class="children">
                <ul>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                          alt
                        />
                      </div>
                      <div class="pro-name">小米cc9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                          alt
                        />
                      </div>
                      <div class="pro-name">小米cc9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                          alt
                        />
                      </div>
                      <div class="pro-name">小米cc9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                          alt
                        />
                      </div>
                      <div class="pro-name">小米cc9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                          alt
                        />
                      </div>
                      <div class="pro-name">小米cc9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                          alt
                        />
                      </div>
                      <div class="pro-name">小米cc9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item-menu">
              <span>电视</span>
              <div class="children">
                <ul>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                          alt
                        />
                      </div>
                      <div class="pro-name">小米cc9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                          alt
                        />
                      </div>
                      <div class="pro-name">小米cc9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                          alt
                        />
                      </div>
                      <div class="pro-name">小米cc9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                          alt
                        />
                      </div>
                      <div class="pro-name">小米cc9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                          alt
                        />
                      </div>
                      <div class="pro-name">小米cc9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href target="_blank">
                      <div class="pro-img">
                        <img
                          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                          alt
                        />
                      </div>
                      <div class="pro-name">小米cc9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="header-search">
            <div class="wrapper">
              <input type="text" name="keyword" />
              <a href="javascript:;"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header',
  data() {
    return {
      phoneList: []
    }
  },
  computed: {
    username() {
      return this.$store.state.username
    },
    cartCount() {
      return this.$store.state.cartCount
    }
  },
  filters: {
    currency(val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted() {
    this.getProductList()
    const params = this.$route.params
    if (params && params.from === 'login') {
      this.getCartCount()
    }
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    logout() {
      this.axios.post('/user/logout').then(() => {
        this.$message.success('退出成功')
        this.$cookie.set('userId', '', { expires: '-1' })
        this.$store.dispatch('saveUserName', '')
        this.$store.dispatch('saveCartCount', '0')
      })
    },
    orderList() {
      this.$router.push('/order/list')
    },
    getProductList() {
      this.axios
        .get('/products', {
          params: {
            categoryId: '100012',
            pageSize: 6
          }
        })
        .then(res => {
          if (res.list.length >= 6) {
            this.phoneList = res.list.slice(0, 6)
          }
        })
    },
    goToCart() {
      this.$router.push('/cart')
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>

<style lang="scss">
@import './../assets/sass/base.scss';
@import './../assets/sass/mixin.scss';
@import './../assets/sass/config.scss';
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #fff;
        margin-right: 0;
        .icon-cart {
          @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            @include bgImg(55px, 55px, '/imgs/mi-logo.png', 55px);
            content: '';
            transition: margin 0.2s;
          }
          &:after {
            @include bgImg(55px, 55px, '/imgs/mi-home.png', 55px);
            content: '';
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        padding-left: 100px;
        width: 600px;
        .item-menu {
          display: inline-block;
          color: #333;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
              z-index: 11;
            }
          }
          .children {
            z-index: 9;
            position: absolute;
            top: 112px;
            left: 0px;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            background-color: #fff;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            transition: all 0.5s;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              background-color: #fff;
              a {
                display: inline-block;
              }
              img {
                width: 160px;
                height: 110px;
                margin-top: 26px;
              }
              .pro-name {
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 250px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, '/imgs/icon-search.png');
            margin-left: 15px;
          }
        }
      }
    }
  }
}
</style>
