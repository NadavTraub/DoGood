<template>
  <div id="app">
   
    <first-page></first-page>
  </div>
</template>

<script>

import FirstPage from './components/FirstPage.vue'

export default {
  name: 'app',
  components: {
    FirstPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
