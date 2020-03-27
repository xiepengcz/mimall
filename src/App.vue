<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import storage from './storage/'
export default {
  data() {
    return {
    }
  },
  methods: {
    getUser() {
      this.axios.get('/user').then(res => {
        // 保存到vuex
        console.log(res)
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res) => {
        console.log(res)
        this.$store.dispatch('saveCartCount', res)
      })
    }
  },
  mounted() {
    this.getUser()
    this.getCartCount()
  }
}
</script>

<style lang="scss">
@import './assets/sass/reset.scss';
@import './assets/sass/config.scss';
@import './assets/sass/button.scss';
</style>
