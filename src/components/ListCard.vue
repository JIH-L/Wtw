<template>
  <div class="movie-card">
    <router-link :to="`/${type}/${id}`">
      <div class="movie-card__img-wrapper">
        <img
          v-lazy="{ src: imgSrc + posterPath, error: lazyOptions.error }"
          alt="movie-img"
          width="152"
          height="201"
        />
        <span class="movie-vote">{{ parseFloat(vote).toFixed(1) }}</span>
      </div>
      <p class="movie-card__title">{{ title }}</p>
    </router-link>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: "MovieCard",
  props: {
    title: String,
    posterPath: String,
    vote: Number,
    id: Number,
    type: String,
  },
  setup() {
        const lazyOptions = reactive({
            error: require('../assets/images/img_bg.png'),
        })
        return {
            lazyOptions,
        }
    },
  data() {
    return {
      imgSrc: `https://www.themoviedb.org/t/p/w440_and_h660_face`,
      img: null,
      errorImg: '@/assets/images/img_bg.png',
      load: "loading",
      images: [],
      options: {
        rootMargin: "0px 0px 100px 0px",
        threshold: 0,
      },
    };
  },
};
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
  &__img-wrapper {
    position: relative;
    img {
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.48));
      max-height: 168px;
    @media (min-width: 768px) {
      max-height: initial;
    }
    }
    .movie-vote {
      position: absolute;
      bottom: 8px;
      right: 4px;
      /* blue_red */
      background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
      /* shadow */
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
      border-radius: 4px;
      padding: 1px 5px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 800;
      font-size: 14px;
      line-height: 21px;
    }
  }
}
</style>