<template lang="jade">
    navbar.right
</template>
<style lang="scss">
    nav.right
    {
        max-width: 100px;
        -js-display: inline-flex;
        display: inline-flex;
        float: right;
        text-align: right;
        ul
        {
            flex-direction: column;
        }
    }
</style>
<script>
    import Navbar from './navbar.vue'
    export default{
        components:{
            'navbar':Navbar
        }
    }
</script>