<template>
  <div class="movie-popular-list">
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <img :src="imgUrl + movie.poster_path" alt="movie-img" width="200">
        <p>{{ movie.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MoviePopularList',
  props: {
    msg: String
  },
  data() {
    return {
      imgUrl: 'https://www.themoviedb.org/t/p/w440_and_h660_face/',
      movies: [],
    };
  },
  mounted() {
    this.axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=7e4fef9f0c4f59d26803904bfcc5f31c&language=zh-TW"
    ).then((response) => {
      this.movies = response.data.results;
    }).catch( error => {
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
  li {
    display: inline-block;
    margin: 0 10px;
    a {
      color: #42b983;
    }
  }
}
</style>
