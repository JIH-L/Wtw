<template>
    <div class="banner" :style="{'background-image': 'url(' + bgUrl + movieDetail.backdrop_path + ')'}">
        <div class="banner-info">
            <span>{{ parseFloat(movieDetail.vote_average).toFixed(1) }}</span>
            <h2>{{ movieDetail.title }}</h2>
            <div class="banner-info__link">
                <a href="#" class="add-list">加入片單</a>
            </div>
        </div>
    </div>
    <div class="tab">
        <span class="tab__intro" @click="introShow">介紹</span>
        <span class="tab__review" @click="reviewShow">評論</span>
    </div>
    <div class="container intro" v-if="isShow">
        <div class="intro__pc-container">
            <div class="intro__post">
                <img v-lazy="imgUrl + movieDetail.poster_path" alt="">
            </div>
            <div class="intro__pc-wrap">
                <ul class="intro__type">
                    <li v-for="genres in movieDetail.genres" :key="genres.id">{{ genres.name }}</li>
                </ul>
                <div class="intro__title">
                    <h2>{{ movieDetail.title }}</h2>
                    <span>{{ parseFloat(movieDetail.vote_average).toFixed(1) }}</span>
                </div>
                <div class="intro__detail">
                    <span class="span-label">{{ releaseDate }}</span>
                    <span class="span-label">{{ movieDetail.original_language }}</span>
                    <span class="span-label">{{ runtime }}</span>
                    <span class="span-label">導演 {{ director }}</span>
                </div>
                <div class="intro__overview">
                    <span class="span-label">劇情介紹</span>
                    <p>{{ movieDetail.overview }}</p>
                </div>
                <WatchProviders :id="movieId"/>
            </div>
        </div>
        <Cast :id="movieId"/>
        <Similar :id="movieId"/>
    </div>
    <div class="container review" v-else>
        <p>沒有關於{{ movieDetail.title }}的評論</p>
    </div>
</template>
<script>
import axios from 'axios';
import WatchProviders from '@/components/WatchProviders.vue';
import Cast from '@/components/Cast.vue';
import Similar from '@/components/Similar.vue';
export default {
    components: {
        WatchProviders,
        Cast,
        Similar,
    },
    data () {
        return {
            movieDetail: {},
            movieCredits: {},
            imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2',
            bgUrl: 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/',
            isShow: true,
        }
    },
    computed: {
        movieId() {
            return this.$route.params.movieId;
        },
        director() {
            return this.movieCredits.crew.filter(item => item.job == 'Director')[0].name;
        },
        releaseDate() {
            return this.movieDetail.release_date.replace(/-/g,"/");
        },
        runtime() {
            let result = '';
            let h = Math.floor((this.movieDetail.runtime / 60 % 60));
            let s = Math.floor(this.movieDetail.runtime % 60);
            result = h + "小時" + s + "分鐘"
            return result;
        },
    },
    methods: {
        async fetchMovieDetail(id) {
            return await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.VUE_APP_API_KEY}&language=zh-TW`)
            .then((response) => response.data);
        },
        async fetchMovieCredits(id) {
            return await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.VUE_APP_API_KEY}&language=zh-TW`)
            .then((response) => response.data);
        },
        introShow() {
            this.isShow = true;
        },
        reviewShow() {
            this.isShow = false;
        }
    },
    async created() {
        this.movieDetail = await this.fetchMovieDetail(this.movieId);
        this.movieCredits = await this.fetchMovieCredits(this.movieId);
    }
}
</script>
<style lang="scss" scoped>
.banner {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    min-height: 250px;
    @media (min-width: 768px) {
        display: none;
    }
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
.container {
    margin: 0 16px;
    @media (min-width: 1280px) {
        max-width: 1200px;
        margin: 0 auto;
    }
}
.tab {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-around;
    @media (min-width:768px) {
        display: none;
    }
    &__intro,
    &__review {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-width: 100px;
        font-family: 'PingFang SC';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        &::after {
            content: "";
            display: block;
            width: 100%;
            height: 4px;
            background: linear-gradient(
                to right,
                #c10171 3.73%,
                #5c00f2 100%
            );
            border-radius: 50px;
            transition: 0.3s all;
        }
    }
}
.intro {
    &__title {
        display: none;
        @media (min-width: 768px) {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            h2 {
                font-family: 'Noto Sans SC';
                font-style: normal;
                font-weight: 500;
                font-size: 30px;
                margin: 0;
                @media (min-width:1280px) {
                    font-size: 38px;
                }
            }
            span {
                font-family: 'Roboto';
                font-style: normal;
                font-size: 50px;
                font-weight: 700;
                background: linear-gradient(to right, #C10171 30%, #5C00F2 70%);
                background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-left: 18px;
            }
        }
    }
    &__post {
        display: none;
        @media (min-width: 768px) {
            display: block;
        }
        img {
            @media (min-width: 768px) {
                border-radius: 20px;
                min-height: 450px;
            }
        }
    }
    &__type {
        padding: 0;
        margin: 0 0 18px;
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        li {
            background-color: #000;
            border: 1px solid #fff;
            border-radius: 4px;
            padding: 3px 10px;
            font-family: 'Noto Sans TC';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
        }
    }
    &__detail {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        margin-bottom: 18px;
    }
    &__overview {
        p {
            text-align: justify;
        }
    }
    &__pc-container {
        @media (min-width: 768px) {
            display: flex;
            gap: 36px;
            margin: 36px -16px 0;
            padding: 20px 16px;
            background: rgba(104, 107, 114, 0.1);
        }
        @media (min-width: 1280px) {
            border-radius: 20px;
        }
    }
}
</style>