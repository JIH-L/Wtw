<template>
  <div class="movie">
    <!-- <div class="movie__filter">
      <p @click="ascVote">ascVote</p>
      <p @click="descVote">評分</p>
      <p @click="descReleaseDate">上映</p>
    </div> -->
    <div class="movie__container">
      <div class="movie__wrap">
        <ListCard
          v-for="movie in movies"
          :key="movie.id"
          :title="movie.title"
          :posterPath="movie.poster_path"
          :vote="movie.vote_average"
          :id="movie.id"
          :type="this.type"
        />
      </div>
      <Observer @intersect="intersected" :options="options"/>
    </div>
  </div>
</template>
<script>
import ListCard from "@/components/ListCard.vue";
import Observer from "@/components/Observer";
export default {
  components: {
    ListCard,
    Observer,
  },
  data() {
    return {
      movies: [],
      type: "movie",
      page: 1,
      totalPage: null,
      options: {
        rootMargin: '0px 0px 10px 0px',
        threshold: 0
      },
    };
  },
  mounted() {},
  computed: {},
  methods: {
    intersected() {
      let loader = this.$loading.show();
      this.axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&language=zh-TW&page=${this.page}`
        )
        .then((response) => {
          this.totalPage = response.data.total_pages;
          let data = response.data.results;
          this.movies = [...this.movies, ...data];
          loader.hide();
        })
        .catch((error) => {
          console.log(error);
        });

      this.page++;
    },
    ascVote() {
      this.movies.sort(
        (a, b) => parseFloat(a.vote_average) - parseFloat(b.vote_average)
      );
    },
    descVote() {
      this.movies.sort(
        (a, b) => parseFloat(b.vote_average) - parseFloat(a.vote_average)
      );
    },
    descReleaseDate() {
      this.movies.sort(
        (a, b) =>
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
      );
    },
  },
};
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
      margin: 40px auto 16px;
    }
  }
}
</style>