<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import './until/rem/rem'
import FooterGuide from '@/components/Footer/FooterGuide'
export default {
  name: 'App',
  components: {
    'v-footer': FooterGuide
  }
}
</script>

<style>
@import './assets/css/reset.css';
@import 'https://at.alicdn.com/t/font_765538_ildeq4lz83.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
