var Vue = require('vue');
var Navbar = require('./components/navbar.vue');
var Leftnav = require('./components/leftnav.vue');
var Bottomnav = require('./components/bottomnav.vue');
var Rightnav = require('./components/rightnav.vue');

new Vue({
    el: 'body',
    components: {
        navbar: Navbar,
        leftnav: Leftnav,
        bottomnav: Bottomnav,
        rightnav: Rightnav
    }
});