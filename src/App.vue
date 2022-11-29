<template>
  <Header />
  <router-view />
  <Footer />
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
body {
  background: #1b1e25;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading {
   to{
     background-position-x: -20%;
   }
}
img[lazy="loading"] {
  // opacity: 0;
  // transition: opacity 1s;
  background: linear-gradient(
            100deg, 
            rgba(180, 180, 180, 0) 30%,
            rgba(142, 142, 142, 0.5) 50%,
            rgba(256, 256, 256, 0) 30%)
            rgba(104, 107, 114, 0.1);
        background-size: 200% 100%;
        background-position-x: 180%;
        animation: 2s loading ease-in-out infinite;
}
img[lazy="loaded"] {
  opacity: 1;
  transition: opacity 1s;
}
.span-label {
  display: flex;
  align-content: center;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  &:before {
    content: "";
    display: inline-block;
    width: 3px;
    min-height: 100%;
    background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
    margin-right: 8px;
  }
}
.swiper {
  .swiper-button-next,
  .swiper-button-prev {
    display: flex;
    width: 50px;
    height: 50px;
    background: rgba(104, 107, 114, 0.1);
    border-radius: 13px;
    &:after {
      font-size: 20px;
      color: #fff;
    }
  }
}
</style>
