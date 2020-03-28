<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import storage from './storage/'
export default {
  data() {
    return {}
  },
  methods: {
    getUser() {
      this.axios.get('/user').then((res = {}) => {
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
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
