<template>
  <div class="movie-popular-list">
    <h3>熱門電影</h3>
    <swiper
      :modules="modules"
      :slides-per-view="2.5"
      :space-between="9"
      navigation
      :breakpoints="swiperOptions.breakpoints"
    >
      <swiper-slide v-for="movie in movies" :key="movie.id">
        <ListCard 
          :title="movie.title"
          :posterPath="movie.poster_path"
          :vote="movie.vote_average"
          :id="movie.id"
          :type="this.type"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import ListCard from './ListCard.vue'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
export default {
  name: 'MoviePopularList',
  components: {
    ListCard,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      movies: [],
      type: 'movie',
      swiperOptions: {
        breakpoints: {
          768: {
            slidesPerView: 5,
            spaceBetween: 9
          },
          1280: {       
            slidesPerView: 6,
            spaceBetween: 16
          }
        }
      }

    };
  },
  mounted() {
    this.axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&language=zh-TW`
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
.movie-popular-list{
  position: relative;
  margin: 0 0 30px 16px;
  @media (min-width:768px) {
    margin: 0 16px 30px;
  }
  @media (min-width:1280px) {
    max-width: 1200px;
    margin: 0 auto 20px;
  }
  h3 {
    text-align: start;
    @media (min-width:1280px) {
      margin: 0 104px 14px;
    }
  }
}
.swiper {
  position: initial;
  @media (min-width:1280px) {
    margin: 0px 104px;
  }
  :deep() .swiper-button-next,
  :deep() .swiper-button-prev {
    display: none;
    @media (min-width:1280px) {
      display: flex;
    }
  }
  :deep() .swiper-button-prev {
    left: 26px;
  }
  :deep() .swiper-button-next {
    right: 26px;
  }
}
</style>
