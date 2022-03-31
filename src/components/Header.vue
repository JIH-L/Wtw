<template>
    <header id="header" class="header">
        <div class="header header__top">
            <div class="header header__logo">
                <img src="../assets/logo.png" alt="logo" width="38">
                <p>挖！影</p>
            </div>
            <div class="header header__search">
                <input type="text" name="" id="">
            </div>
        </div>
        <div class="header header__bottom">
            <div class="header header__menu">
                <ul>
                    <li><a href="#">電影</a></li>
                    <li><a href="#">戲劇</a></li>
                    <li><a href="#">主題館</a></li>
                    <li><a href="#">我的片單</a></li>
                </ul>
            </div>
            <div class="header__login">
                <img src="../assets/Group29.png" alt="">
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderMenu'
}
</script>

<style lang="scss" scoped>
header {
    position: sticky;
    top: 0;
    z-index: 100;
    justify-content: space-between;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.48);
    background: rgba(27, 30, 37, 0.68);
    padding: 10px 40px;
}
.header {
    display: flex;
    &__top {

    }
    &__bottom {
        
    }
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>