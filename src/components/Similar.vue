<template>
    <div class="intro__similar">
        <p class="title">相關影片</p>
        <swiper
        :slides-per-view="2.5"
        :space-between="8"
        >
            <swiper-slide v-for="similar in similars" :key="similar.id">
                <img v-lazy="imgUrl + similar.poster_path" alt="">
                <p>{{ similar.title }}</p>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
export default {
    name: 'SimilarBlock',
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        id: Number,
    },
    data() {
        return {
            imgUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face',
            similars: [],
        }
    },
    mounted () {
        this.axios.get(`https://api.themoviedb.org/3/movie/${this.id}/similar?api_key=7e4fef9f0c4f59d26803904bfcc5f31c&language=zh-TW`)
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
}
.title {
    text-align: start;
}
img {
    max-width: 131px;
    min-height: 170px;
    border-radius: 8px;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.48));
}
</style>