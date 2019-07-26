<template id="container" lang="html">
    <div>
        <loading v-if="showloading"></loading>

        <login v-if="!granted"></login>
        <user v-else></user>
    </div>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {
            }
        },
        computed: {
            granted: function () {

                // console.log(localStorage.getItem("token"));


                if(!localStorage.getItem("token")){
                    return false;
                }else{
                    return true;
                }

                // return false;
            }
        },
        props: ['showloading'],
        components: {
            'loading': httpVueLoader('../../app/shareds/Loading.vue'),
            'login': httpVueLoader('../../app/sections/login/Login.vue'),
            'user': httpVueLoader('../../app/shareds/User.vue')
        }
    }
</script>

<style>

</style>
