<template>
    <div class="intro__cast">
        <swiper
        :slides-per-view="4.3"
        :space-between="8"
        :breakpoints="swiperOptions.breakpoints"
        >
            <swiper-slide v-for="cast in casts.cast" :key="cast.cast_id">
                <img v-lazy="{src: imgUrl + cast.profile_path, error: lazyOptions.error }" alt="">
                <p>{{ cast.name }}</p>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
export default {
    name: 'CastBlock',
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        id: String,
        type: String,
    },
    setup() {
        const lazyOptions = reactive({
            loading: require('../assets/images/cast.png'),
            error: require('../assets/images/cast.png'),
        })
        return {
            lazyOptions,
        }
    },
    data() {
        return {
            imgUrl: 'https://www.themoviedb.org/t/p/w138_and_h175_face',
            casts: [],
            swiperOptions: {
                breakpoints: {
                    768: {
                        slidesPerView: 8.5,
                        spaceBetween: 13
                    },
                    1280: {       
                        slidesPerView: 14,
                        spaceBetween: 13
                    }
                }
            }
        }
    },
    mounted () {
        this.axios.get(`https://api.themoviedb.org/3/${this.type}/${this.id}/credits?api_key=7e4fef9f0c4f59d26803904bfcc5f31c&language=zh-TW`)
        .then((response) => {
            this.casts = response.data;
        })
    }
}
</script>
<style lang="scss" scoped>
.intro__cast {
    background: rgba(104, 107, 114, 0.1);
    margin: 25px -16px 0;
    padding: 16px 0 16px 16px;
    @media (min-width: 1280px) {
        border-radius: 20px;
        padding: 16px;
    }
}
img {
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 8px;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.48));
}
p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    margin: 0;
}
</style>