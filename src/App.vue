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
      res: {}
    }
  },
  methods: {
    getUser() {
      this.axios.get('/user').then(() => {
        // 保存到vuex
      })
    },
    getCartCount() {}
  },
  mounted() {}
}
</script>

<style lang="scss">
@import './assets/sass/reset.scss';
@import './assets/sass/config.scss';
@import './assets/sass/button.scss';
</style>
