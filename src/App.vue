<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import storage from './storage/'
export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {
    storage.clear('x', 'user')
  }
}
</script>
<style>
</style>
