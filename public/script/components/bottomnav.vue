<template lang="jade">
    navbar.bottom
</template>
<style lang="scss">
    nav.bottom
    {
        position: absolute;
        bottom: 0;
        width: 100%;
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