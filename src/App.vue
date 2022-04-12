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

<style lang="scss">
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
  @keyframes rotation {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
  img[lazy=loading] {
    opacity: 0;
    transition: opacity 1s;
  }
  img[lazy=loaded] {
    opacity: 1;
    transition: opacity 1s;
  }
</style>
