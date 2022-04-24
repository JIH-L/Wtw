<template>
<div class="movie-card">
    <router-link :to="`/${type}/${id}`">
        <div class="movie-card__img-wrapper">
            <img v-lazy="{src: lazyOptions.src, error:  lazyOptions.error, loading: lazyOptions.loading }" alt="movie-img" width="152">
            <span class="movie-vote">{{ parseFloat(vote).toFixed(1) }}</span>
        </div>
        <p class="movie-card__title">{{ title }}</p>
    </router-link>
</div>
</template>

<script>
import { reactive } from 'vue';
export default {
    name: 'MovieCard',
    props: {
        title: String,
        posterPath: String,
        vote: Number,
        id: Number,
        type: String,
    },
    setup(props) {
        const lazyOptions = reactive({
            src: `https://www.themoviedb.org/t/p/w440_and_h660_face${props.posterPath}`,
            loading: require('../assets/images/img_bg.png'),
            error: require('../assets/images/img_bg.png'),
        })
        return {
            lazyOptions,
        }
    }
}
</script>

<style lang="scss" scoped>
.movie-card {
    a {
        color: #fff;
        text-decoration: none;
    }
    &__title {
        margin-top: 4px;
        margin-bottom: 0;
        overflow:hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        white-space: normal;
        @media (min-width: 1280px) {
            margin-top: 16px;
        }
    }
    &__img-wrapper {
        position: relative;

        img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            overflow: hidden;
            filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.48));
            @media (min-width: 1280px) {
                min-height: 228px;
            }
        }
        .movie-vote {
            position: absolute;
            bottom: 8px;
            right: 4px;
            /* blue_red */
            background: linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%);
            /* shadow */
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
            border-radius: 4px;
            padding: 1px 5px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 800;
            font-size: 14px;
            line-height: 21px;
        }
    }
}
</style>