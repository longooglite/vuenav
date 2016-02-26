<style>
    nav>ul
    {
        -js-display: flex;
        display: flex;
        justify-content: space-around;
        padding: 0;
        margin: 0;
    }
    nav>ul>li.active
    {
        color: red;
    }
    nav>ul li
    {
        list-style-type: none;
        display: flex;
        align-items: flex-end;
    }
    nav>ul li ul li span
    {
        display: block;
        width: 100%;
        text-align: right;
    }
</style>
<template lang="jade">
    nav
        ul
            li(v-for="cat in cats", v-on:click="test()" v-bind:class="active == {{$index}} ? : 'active'") {{$index}}
                span(v-if="typeof cat == 'string' || cat instanceof String")
                    {{cat}}
                span(v-else) {{cat.title}}
                    ul(v-else)
                        li(v-for="subcat in cat.subcats")
                            span
                                {{subcat}}
</template>
<script>
    export default{
        data(){
            return {
                active: 0,
                cats : [
                    "personal info",
                    "national provider identifier information",
                    {
                        "title":"background and education check authorization",
                        "subcats": [
                            "general",
                            "consent",
                            "disclosures",
                            "applicant rights",
                            "personal and education summary"
                        ]
                    },
                    "authorization, release, and immunity (ari)",
                    "submit candidate items"
                ]
            };
        },
        components:{

        },
        methods:{
            test: function(string, event){
                console.log(string, event);
                event.target.active  = "active";
            }
        }
    }
</script>