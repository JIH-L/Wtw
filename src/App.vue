<template>
  <Header/>
  <FrontPageBanner/>
  <MoviePopularList/>
  <TvKoreaPopularList />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import FrontPageBanner from './components/FrontPageBanner.vue'
import MoviePopularList from './components/MoviePopularList.vue'
import TvKoreaPopularList from './components/TvKoreaPopularList.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    FrontPageBanner,
    MoviePopularList,
    TvKoreaPopularList,
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
