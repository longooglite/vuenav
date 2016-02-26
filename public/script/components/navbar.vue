<template lang="jade">
    - var cats = ["personal info", "national provider identifier information", {"title":"background and education check authorization","subcats":["general", "consent", "disclosures", "applicant rights", "personal and education summary"]}, "authorization, release, and immunity (ari)", "submit candidate items"];
    nav
        ul
            each cat in cats
                if typeof cat == "string" || cat instanceof String
                    li
                        span= cat
                else
                    li
                        ul
                            each subcat in cat.subcats
                                li
                                    span= subcat
</template>
<style lang="scss">
    nav
    {
         ul
        {
            -js-display: flex;
            display: flex;
            justify-content: space-around;
            padding: 0;
            margin: 0;
            li
            {
                list-style-type: none;
            }
        }
        > ul > li
        {
            border-bottom: solid black 1px;
        }
    }
</style>
<script>
    export default{
        components:{

        }
    }
</script>