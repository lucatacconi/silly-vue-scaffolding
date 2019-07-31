<template id="container" lang="html">
    <div>
        <loading v-if="showloading"></loading>
        <login v-if="!granted"></login>
        <navigator v-else></navigator>
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
                if(!localStorage.getItem("token")){
                    return false;
                }else{
                    return true;
                }
            }
        },
        props: ['showloading'],
        components: {
            'loading': httpVueLoader('../../app/shareds/Loading.vue'),
            'login': httpVueLoader('../../app/sections/login/Login.vue'),
            'navigator': httpVueLoader('../../app/shareds/Navigator.vue')
        },
        methods: {
            checkSession: function(){
                var self = this;
                Utils.apiCall("get", "/auth/session/check");
            }
        },
        mounted: function() {
            if(this.granted){
                this.checkSession();
            }
        }
    }
</script>

<style>
</style>
