<template>
    <div v-if="providers" class="intro__watch-providers">
        <span class="span-label">播放平台</span>
        <div class="container">
            <div class="wrapper" v-if="providers.flatrate">
                <span>串流</span>
                <img v-for="providers in providers.flatrate" :key="providers.provider_id" :src="imgUrl + providers.logo_path" alt="">
            </div>
            <div class="wrapper" v-if="providers.rent">
                <span>租借</span>
                <img v-for="providers in providers.rent" :key="providers.provider_id" v-lazy="imgUrl + providers.logo_path" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'WatchProviders',
    props: {
        id: Number,
    },
    data() {
        return {
            imgUrl: 'https://www.themoviedb.org/t/p/original',
            providers: [],
        }
    },
    mounted () {
        this.axios.get(`https://api.themoviedb.org/3/movie/${this.id}/watch/providers?api_key=7e4fef9f0c4f59d26803904bfcc5f31c&language=zh-TW`)
        .then((response) => {
            this.providers = response.data.results.TW;
        })
    }
}
</script>
<style lang="scss" scoped>
.container {
    margin: 16px 0;
}
.wrapper {
    display: flex;
    flex-direction: row;
    align-content: center;
    gap: 16px;
    span {
        margin: auto 0;
    }
    img {
        width: 36px;
        height: 36px;
    }
}
</style>