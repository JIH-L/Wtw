<template>
    <header id="header" class="header" :class="{ scrolled: scroll }">
        <div class="header header__top">
            <router-link to="/">
                <div class="header header__top__logo">
                    <img src="../assets/logo.png" alt="logo" width="38" height="31" />
                    <p>挖！影</p>
                </div>
            </router-link>
            <div class="header header__top__search">
                <input type="text" name id placeholder="搜尋劇名 / 演員" />
            </div>
        </div>
        <div class="header header__bottom">
            <ul class="header header__menu">
                <li>
                    <router-link to="/movie"><img src="../assets/Icon/Vector.svg" alt="icon" />電影</router-link>
                </li>
                <li>
                    <router-link to="/tv"><img src="../assets/Icon/Union.svg" alt="icon" />戲劇</router-link>
                </li>
                <li>
                    <a href="/"><img src="../assets/Icon/Combined-Shape.svg" alt="icon" />主題館</a>
                </li>
                <li>
                    <a href="/"><img src="../assets/Icon/fav.svg" alt="icon" />我的片單</a>
                </li>
            </ul>
            <div class="header__login">
                <img src="../assets/images/Group29.png" alt />
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderMenu",
    data() {
        return {
            scroll: false,
        };
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scroll = window.scrollY > 10;
        },
    },
};
</script>

<style lang="scss" scoped>
header {
    position: sticky;
    top: 0;
    z-index: 100;
    justify-content: space-between;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.48);
    background: rgba(27, 30, 37, 0.85);
    transition: 0.3s all;
    @media (min-width: 768px) {
        background: rgba(27, 30, 37, 0.68);
    }
    &.scrolled {
        background: rgba(27, 30, 37, 1);
    }
}
.header {
    display: flex;
    &__top {
        width: 100%;
        padding: 5px 16px;
        gap: 10px;
        align-items: center;
        @media (min-width: 768px) {
            padding: 10px 0 10px 30px;
            width: initial;
        }
        @media (min-width: 1280px) {
            padding: 10px 0 10px 40px;
        }
        a {
            color: #fff;
            text-decoration: none;
        }
        &__logo {
            gap: 8px;
            min-width: 94px;
            align-items: center;
            p {
                font-family: "Noto Sans TC";
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                margin: 0;
            }
        }
        &__search {
            height: 38px;
            width: 100%;
            @media (min-width: 768px) {
                width: initial;
            }
            input {
                color: #fff;
                border: 1px solid #686b72;
                box-sizing: border-box;
                border-radius: 8px;
                background-color: transparent;
                background-image: url("../assets/Icon/search.svg");
                background-position: center left 20px;
                background-repeat: no-repeat;
                padding-left: 50px;
                width: 100%;
                @media (min-width: 768px) {
                    min-width: 192px;
                }
                @media (min-width: 1280px) {
                    min-width: 378px;
                }
                &:focus-visible {
                    outline: none;
                }
            }
        }
    }
    &__bottom {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #161616;
        @media (min-width: 768px) {
            position: relative;
            background: initial;
            width: initial;
            padding-right: 30px;
        }
        @media (min-width: 1280) {
            padding-right: 40px;
        }
        ul {
            display: flex;
            justify-content: space-around;
            list-style-type: none;
            padding: 0;
            width: 100%;
            margin: 13px 0 8px;
            @media (min-width: 768px) {
                align-items: flex-end;
                margin: 0;
            }
            li {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin: 0 10px;
                flex-basis: 100%;
                @media (min-width: 768px) {
                    min-width: 77px;
                    margin: 0 3.5px;
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
                        margin-top: 4px;
                        opacity: 0;
                        border-radius: 50px;
                        transition: 0.3s all;
                    }
                    &:hover {
                        transition: 0.3s all;
                        &::after {
                            opacity: 1;
                        }
                    }
                }
                img {
                    margin-bottom: 4px;
                    @media (min-width: 768px) {
                        display: none;
                    }
                }
                a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    margin: 0 10px;
                    flex-basis: 100%;
                    width: 100%;
                    color: #686b72;
                    text-decoration: none;
                    font-family: "PingFang SC";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 10px;
                    line-height: 16px;
                    text-align: center;
                    @media (min-width: 768px) {
                        color: #fff;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    &__login {
        margin: 0 17px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
