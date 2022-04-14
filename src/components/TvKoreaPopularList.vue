<template>
  <div class="tv-popular-list-korea">
    <h3>熱門韓劇</h3>
    <swiper
      :modules="modules"
      :slides-per-view="2.5"
      :space-between="9"
      navigation
      :breakpoints="swiperOptions.breakpoints"
    >
      <swiper-slide v-for="movie in movies" :key="movie.id">
        <ListCard 
          :title="movie.name"
          :posterPath="movie.poster_path"
          :vote="movie.vote_average"
          :id="movie.id"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ListCard from './ListCard.vue'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';
export default {
  name: 'MoviePopularList',
  components: {
    ListCard,
    Swiper,
    SwiperSlide,
  },
  setup() {
    let url = 'https://api.themoviedb.org/3/tv/popular?api_key=7e4fef9f0c4f59d26803904bfcc5f31c&language=zh-TW'
    let movies = ref([]);
    async function fetchMovieData() {
      let page = 0;
      do {
          let { data: response }  = await axios.get(url, { params: { page: ++page } });
          movies.value = movies.value.concat(response.results);
          movies.value = movies.value.filter(item => item.origin_country == 'KR');
      } while (movies.value.length < 30)
    }

    onMounted(fetchMovieData);

    return {
      modules: [Navigation],
      movies,
    };
  },
  data() {
    return {
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tv-popular-list-korea {
  position: relative;
  background: rgba(104, 107, 114, 0.1);
  padding: 16px 0px 16px 16px;
  @media (min-width:768px) {
    padding: 40px 16px;
  }
  @media (min-width:1280px) {
    border-radius: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
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
      width: 50px;
      height: 50px;
      background: rgba(104, 107, 114, 0.1);
      border-radius: 13px;
    }
    &:after {
      font-size: 20px;
      color: #fff;
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
