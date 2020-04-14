<template>
  <div class="loading">
    <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt />
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style lang="scss">
.loading {
  height: 100px;
  line-height: 100px;
  text-align: center;
  margin: 40px auto;
  img {
    height: 100px;
    width: 100%;
  }
}
</style>
