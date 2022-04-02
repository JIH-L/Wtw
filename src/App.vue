<template>
  <Header/>
  <FrontPageBanner/>
  <MoviePopularList msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Header from './components/Header.vue'
import MoviePopularList from './components/MoviePopularList.vue'
import FrontPageBanner from './components/FrontPageBanner.vue'

export default {
  name: 'App',
  components: {
    Header,
    FrontPageBanner,
    MoviePopularList
  },
  methods: {
  }
}
</script>

<style>
body {
  background: #1B1E25;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
