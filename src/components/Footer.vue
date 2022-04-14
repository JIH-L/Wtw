<template>
    <footer>
        <h4>挖影 © Code: J.L.  /  Design: K.T</h4>
    </footer>
</template>
<script>
export default {
    name: "FooterBlock",
}
</script>
<style lang="scss" scoped>
    footer {
        margin-top: 50px;
        @media (min-width: 768px) {
            margin-top: 63px;
        }
        @media (min-width:1280px) {
            margin-top: 96px;
        }
        h4 {
            color: #686B72;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        }
    }
</style>