<template>
  <div class="movie">
    <div class="movie__container">
      <div class="movie__filter">
        <div class="movie__filter__filters">
          <div>
            <h3>類型</h3>
            <ul>
              <li>
                <a href="#" data-value="12" @click.prevent="addType" :class="{ active : this.movieType.includes('12') }">冒險</a>
              </li>
              <li>
                <a href="#" data-value="18" @click.prevent="addType" :class="{ active : this.movieType.includes('18') }">劇情</a>
              </li>
              <li>
                <a href="#" data-value="28" @click.prevent="addType" :class="{ active : this.movieType.includes('28') }">動作</a>
              </li>
              <li>
                <a href="#" data-value="16" @click.prevent="addType" :class="{ active : this.movieType.includes('16') }">動畫</a>
              </li>
              <li>
                <a href="#" data-value="36" @click.prevent="addType" :class="{ active : this.movieType.includes('36') }">歷史</a>
              </li>
              <li>
                <a href="#" data-value="35" @click.prevent="addType" :class="{ active : this.movieType.includes('35') }">喜劇</a>
              </li>
              <li>
                <a href="#" data-value="14" @click.prevent="addType" :class="{ active : this.movieType.includes('14') }">奇幻</a>
              </li>
              <li>
                <a href="#" data-value="10751" @click.prevent="addType" :class="{ active : this.movieType.includes('10751') }">家庭</a>
              </li>
              <li>
                <a href="#" data-value="27" @click.prevent="addType" :class="{ active : this.movieType.includes('27') }">恐怖</a>
              </li>
              <li>
                <a href="#" data-value="9648" @click.prevent="addType" :class="{ active : this.movieType.includes('9648') }">懸疑</a>
              </li>
              <li>
                <a href="#" data-value="53" @click.prevent="addType" :class="{ active : this.movieType.includes('53') }">驚悚</a>
              </li>
              <li>
                <a href="#" data-value="10752" @click.prevent="addType" :class="{ active : this.movieType.includes('10752') }">戰爭</a>
              </li>
              <li>
                <a href="#" data-value="10749" @click.prevent="addType" :class="{ active : this.movieType.includes('10749') }">愛情</a>
              </li>
              <li>
                <a href="#" data-value="80" @click.prevent="addType" :class="{ active : this.movieType.includes('80') }">犯罪</a>
              </li>
              <li>
                <a href="#" data-value="10770" @click.prevent="addType" :class="{ active : this.movieType.includes('10770') }">電視電影</a>
              </li>
              <li>
                <a href="#" data-value="878" @click.prevent="addType" :class="{ active : this.movieType.includes('878') }">科幻</a>
              </li>
              <li>
                <a href="#" data-value="99" @click.prevent="addType" :class="{ active : this.movieType.includes('99') }">紀錄</a>
              </li>
              <li>
                <a href="#" data-value="37" @click.prevent="addType" :class="{ active : this.movieType.includes('37') }">西部</a>
              </li>
              <li>
                <a href="#" data-value="10402" @click.prevent="addType" :class="{ active : this.movieType.includes('10402') }">音樂</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>評分</h3>
            <div class="vote">
              <input type="range" id="vote" name="vote" min="0" max="10" value="10" step="1" v-model="movieVote">
              <label for="vote">{{this.movieVote}}</label>
            </div>
          </div>
          <button @click="search">搜尋</button>
        </div>
        <div class="movie__filter__sort">
          <ul>
            <li>
              <a href="#" @click.prevent="sort('popularity.desc')" :class="{ active : this.sortBy=='popularity.desc' }">人氣降序</a>
            </li>
            <li>
              <a href="#" @click.prevent="sort('popularity.asc')" :class="{ active : this.sortBy=='popularity.asc' }">人氣升序</a>
            </li>
            <li>
              <a href="#" @click.prevent="sort('primary_release_date.desc')" :class="{ active : this.sortBy=='primary_release_date.desc' }">上映日期降序</a>
            </li>
            <li>
              <a href="#" @click.prevent="sort('primary_release_date.asc')" :class="{ active : this.sortBy=='primary_release_date.asc' }">上映日期升序</a>
            </li>
          </ul>
        </div>
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
      movieUrl: 'https://api.themoviedb.org/3/discover/movie',
      page: 1,
      totalPage: null,
      options: {
        rootMargin: "0px 0px 10px 0px",
        threshold: 0,
      },
      sortBy: 'popularity.desc',
      movieSearch: false,
      movieType:[],
      movieVote: "10",
    };
  },
  methods: {
    intersected() {
      let loader = this.$loading.show();
        this.axios
            .get(this.movieUrl, {
                params: {
                  'api_key': process.env.VUE_APP_API_KEY,
                  'language': 'zh-TW',
                  'certification_country': 'TW',
                  'page': this.page,
                  'sort_by': this.sortBy,
                  'air_date.lte': '2023-05-27',
                  'release_date.lte': '2023-05-27',
                  'with_genres': this.movieType.toString(),
                  'vote_average.gte': 0,
                  'vote_average.lte': this.movieVote,
                }
              }
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
    },
    sort(val) {
      this.movies = [];
      this.sortBy = val;
      this.page = 1;
      this.intersected();
    },
    addType(e) {
      let val = e.currentTarget.getAttribute('data-value');
      if(this.movieType.includes(val)) {
        let index = this.movieType.indexOf(val);
        this.movieType.splice(index, 1)
      } else {
        this.movieType.push(val);
      }
    },
    search() {
      this.movies = [];
      this.page = 1;
      this.intersected();
    }
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
    background: rgba(104, 107, 114, 0.1);
    border-radius: 13px;
    gap: 10px;
    margin: 40px 16px;
    padding: 20px;
    @media (min-width: 1280px) {
      margin: 40px auto 16px;
      padding: 24px;
      max-width: 992px;
    }
    h3 {
      display: flex;
      text-align: left;
      margin: 0 0 16px 0;
      &::before {
        content: "";
        display: inline-block;
        width: 3px;
        min-height: 100%;
        background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
        margin-right: 8px;
      }
    }
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding: 0;
      margin: 0;
    }
    a {
      color: #fff;
      border-radius: 5px;
      display: inline-block;
      text-decoration: none;
      background: black;
      padding: 6px 14px;
      &.active {        
        background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%),
          linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
      }
    }
    button {
      width: 160px;
      height: 42px;
      border: 0;
      border-radius: 13px;
      background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%),
        linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
      color: #fff;
      margin-top: 14px;
      &:hover {
        cursor: pointer;
      }
    }
    &__filters {
      margin-bottom: 24px;
      >div {
        margin-bottom: 24px;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
      .vote {
        display: flex;
        label {
          margin-left: 10px;
        }
        input {
          display: flex;
          -webkit-appearance: none;
          appearance: none;
          width: 25%;
          height: 20px;
          border-radius: 13px;
          background: black;
          outline: none;
          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 25px;
            height: 25px;
            background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%),
            linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.48);
            border-radius: 50px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>