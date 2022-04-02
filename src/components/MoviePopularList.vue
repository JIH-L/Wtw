<template>
  <div class="movie-popular-list">
    <h3>熱門電影</h3>
    <ul>
      <MovieCard :movies="movies"/>
    </ul>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue'

export default {
  name: 'MoviePopularList',
  components: {
    MovieCard,
  },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=7e4fef9f0c4f59d26803904bfcc5f31c&language=zh-TW"
    ).then((response) => {
      this.movies = response.data.results;
    }).catch(error => {
        console.log(error);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
