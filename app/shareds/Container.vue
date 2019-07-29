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
                    if(!Utils.parseJwt(localStorage.getItem("token")).username ||
                       !localStorage.getItem("accountData") ||
                       Utils.parseJwt(localStorage.getItem("token")).username != JSON.parse(localStorage.getItem("accountData")).username){

                        Swal.fire({
                            type: 'error',
                            title: 'Session expired',
                            text: "Login needed again",
                        }).then((result) => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("accountData");
                            window.location.href = "index.php";
                            return;
                        });
                    }else{
                        return true;
                    }
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
                Utils.apiCall("get", "/session/check")
                .then(function (response) {
                    Utils.showLoadingOFF();
                });
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
