<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
    :speed="1500"
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="movie in filterMovieItems" :key="movie.id" 
    :style="{'background-image': 'url(' + imgUrl + movie.backdrop_path + ')'}">
        <div class="banner-info">
            <span>{{ parseFloat(movie.vote_average).toFixed(1) }}</span>
            <h2>{{ movie.title }}</h2>
            <p>{{ movie.overview }}</p>
            <div class="banner-info__link">
                <router-link :to="`/movie/${movie.id}`" class="more">更多資訊</router-link>
                <!-- <a href="#" class="add-list">加入片單</a> -->
            </div>
        </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default {
    name: 'FrontPageBanner',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation, Pagination, Autoplay],
      };
    },
    data() {
        return {
            imgUrl: 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces',
            movies: [],
        };
    },
    computed: {
        filterMovieItems() {
            return this.movies.slice(0, 10)
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
.swiper {
    margin-top: -70px;
}
.swiper-slide {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    min-height: 250px;
    &::before {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(360deg, #1B1E25 0%, rgba(27, 30, 37, 0) 29.22%), radial-gradient(72.5% 427.7% at 96.33% 50%, rgba(27, 30, 37, 0) 39.58%, rgba(27, 30, 37, 0.93) 94.79%);
    }
    @media (min-width:768px) {
        min-height: 432px;
    }
    @media (min-width:1280px) {
        min-height: 720px;
    }
    .banner-info {
        position: relative;
        z-index: 1;
        margin: 40px 38px 0;
        text-align: start;
        h2 {
            font-family: 'Noto Sans SC';
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            margin: 0;
            @media (min-width:768px) {
                font-size: 55px;
            }
            @media (min-width:1280px) {
                font-size: 76px;

            }
        }
        span {
            font-family: 'Roboto';
            font-style: normal;
            font-size: 33px;
            font-weight: 700;
            background: linear-gradient(to right, #C10171 30%, #5C00F2 70%);
            background-clip: text;
            -webkit-text-fill-color: transparent;
            @media (min-width:768px) {
                font-size: 61px;
            }
            @media (min-width:1280px) {
                font-size: 70px;
            }
        }
        p {
            overflow:hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            white-space: normal;
            font-family: 'Noto Sans TC';
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            display: none;
            @media (min-width:768px) {
                display: -webkit-box;
                max-width: 295px;
                margin: 0;
            }
            @media (min-width:1280px) {
                font-size: 16px;
                max-width: 346px;
            }
        }
        &__link {
            margin-top: 7px;
            a {
                display: inline-block;
                padding: 3px 24px;
                border: 2px solid transparent;
                background-clip: padding-box, border-box;
                background-origin: padding-box, border-box;
                background-image: linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%), linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%);
                text-decoration: none;
                color: #fff;
                font-family: 'Noto Sans TC';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
                border-radius: 8px;
                @media (min-width:768px) {
                    padding: 8.5px 36px;
                    font-size: 16px;
                }
                @media (min-width:1280px) {
                    padding: 8.5px 46px;
                }
            }
            .more {
                display: none;
                @media (min-width:768px) {
                    display: inline-block;
                    margin-right: 10px;
                    background-image: linear-gradient(to right, #161616, #161616), linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%);
                }
            }
        }
    }
}
:deep() .swiper-pagination {
    text-align: end;
    bottom: 24px;
    transform: translate3d(-24px,0,0);
    @media (min-width:768px) {
        bottom: 50px;
        transform: translate3d(-47px,0,0);
    }
    .swiper-pagination-bullet {
        width: 8px;
        height: 3px;
        background: rgba(255, 255, 255, 0.37);
        border-radius: 50px;
        margin: 0 2px;
        @media (min-width:768px) {
            width: 14px;
            height: 6px;
            margin: 0 3.5px;
        }
        &.swiper-pagination-bullet-active {
            width: 18px;
            background: #fff;
            @media (min-width:768px) {
                width: 31px;
            }
        }
    }
}
</style>