<template>
    <div class="intro__similar" v-if="similars.length!==0">
        <p class="title">相關影片</p>
        <swiper
            :modules="modules"
            :slides-per-view="2.5"
            :space-between="8"
            navigation
            :breakpoints="swiperOptions.breakpoints"
            >
            <swiper-slide v-for="similar in similars" :key="similar.id">
                <!-- <router-link :to="`/movie/${similar.id}`"> -->
                    <img v-lazy="imgUrl + similar.poster_path" alt="">
                    <p v-if="similar.title">{{ similar.title }}</p>
                    <p v-else>{{ similar.name }}</p>
                <!-- </router-link> -->
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
export default {
    name: 'SimilarBlock',
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        id: String,
        type: String,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
    data() {
        return {
            imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face',
            similars: [],
            swiperOptions: {
                breakpoints: {
                    768: {
                        slidesPerView: 4.5,
                        spaceBetween: 9
                    },
                    1280: {       
                        slidesPerView: 6,
                        spaceBetween: 16
                    }
                }
            }
        }
    },
    mounted () {
        this.axios.get(`https://api.themoviedb.org/3/${this.type}/${this.id}/recommendations?api_key=${process.env.VUE_APP_API_KEY}&language=zh-TW`)
        .then((response) => {
            this.similars = response.data.results;
        })
    }
}
</script>
<style lang="scss" scoped>
.intro__similar {
    background: rgba(104, 107, 114, 0.1);
    margin: 25px -16px 0;
    padding: 16px 0 16px 16px;
    @media (min-width: 1280px) {
        border-radius: 20px;
        padding: 16px 0;
        position: relative;
    }
    a {
        color: #fff;
        text-decoration: none;
    }
}
.title {
    text-align: start;
    @media (min-width: 1280px) {
        padding: 0 104px;
    }
}
img {
    max-width: 131px;
    min-height: 170px;
    border-radius: 8px;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.48));
    @media (min-width: 768px) {
        max-width: 152px;
    }
}
.swiper {
    @media (min-width: 1280px) {
        position: initial;
        margin: 0 104px;
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