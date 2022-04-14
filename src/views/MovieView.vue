<template>
  <div class="movie">
    <div class="movie__filter">
      <p>filter</p>
    </div>
    <div class="movie__wrap">
      <ListCard v-for="movie in movies" :key="movie.id"
        :title="movie.title"
        :posterPath="movie.poster_path"
        :vote="movie.vote_average"/>
    </div>
  </div>
</template>
<script>
import ListCard from '@/components/ListCard.vue'
export default {
  components: {
    ListCard,
  },
  data() {
    return {
      movies: [],
    }
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
<style lang="scss" scoped>
.movie {
  &__wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 9px;
    row-gap: 20px;
    margin: 0 16px;
    @media (min-width: 768px) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media (min-width: 1280px) {
      max-width: 992px;
      margin: 0 auto;
    }
    .movie-card {
    }
  }
}
</style>