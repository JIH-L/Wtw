<template>
  <FrontPageBanner/>
  <MoviePopularList/>
  <TvKoreaPopularList />
</template>

<script>
// @ is an alias to /src
import FrontPageBanner from '@/components/FrontPageBanner.vue'
import MoviePopularList from '@/components/MoviePopularList.vue'
import TvKoreaPopularList from '@/components/TvKoreaPopularList.vue'

export default {
  name: 'HomeView',
  components: {
    FrontPageBanner,
    MoviePopularList,
    TvKoreaPopularList,
  }
}
</script>
