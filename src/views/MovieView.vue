<template>
  <div class="movie">
    <div class="movie__container">
      <div class="movie__filter">
        <a @click="this.sort('popularity.desc')">人氣 ↓ </a>
        <a @click="this.sort('popularity.asc')">人氣 ↑ </a>
        <a @click="this.sort('primary_release_date.desc')">上映 ↓ </a>
        <a @click="this.sort('primary_release_date.asc')">上映 ↑ </a>
      </div>
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
      <Observer @intersect="intersected" :options="options" />
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
        rootMargin: "0px 0px 10px 0px",
        threshold: 0,
      },
      sortBy: '',
    };
  },
  methods: {
    intersected() {
      let loader = this.$loading.show();
      if(this.sortBy) {
        this.axios
            .get(
              `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_API_KEY}&language=zh-TW&page=${this.page}&sort_by=${this.sortBy}`
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
      } else {
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
      }
    },
    sort(val) {
      this.movies = [];
      this.sortBy = val;
      this.page = 1;
      this.intersected();
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
  &__filter {
    display: flex;
    gap: 10px;
    margin: 40px 16px;
    @media (min-width: 1280px) {
      margin: 40px auto 16px;
      max-width: 992px;
    }
    a {
      border: 1px solid #fff;
      border-radius: 5px;
      padding: 4px;
    }
  }
}
</style>