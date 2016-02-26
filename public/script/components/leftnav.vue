<template lang="jade">
    navbar.left
</template>
<style lang="scss">
    nav.left
    {
        height: 100%;
        max-width: 100px;
        -js-display: inline-flex;
        display: inline-flex;
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