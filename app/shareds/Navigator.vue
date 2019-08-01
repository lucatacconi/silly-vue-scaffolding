<template id="navigator" lang="html">
    <div>
        <navbar v-on:drawer="drawer=!drawer "></navbar>
        <navdrawer :drawer="drawer" v-on:select="selection=$event" :selection="selection" v-on:navto="test($event)"    ></navdrawer>
        <!-- <v-card >fdfdf</v-card> -->


        <v-content>
            <v-container fluid fill-height>
                <v-layout>
                    <v-flex>
                        <div> Hello </div>
                        <p>
                            <div>
                                <router-link to="/app1">Go to app1</router-link>
                            </div>
                            <div>
                                <router-link to="/app2">Go to Baapp2r</router-link>
                            </div>
                            <div>
                                <router-link to="/app3">Go to Baapp3r</router-link>
                            </div>
                        </p>
                        <router-view></router-view>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>



        <appfooter></appfooter>
   </div>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {
                drawer:true,
                selection:0
            }
        },

        mounted: function(){
            console.log(router);

            router.addRoutes([
                { path: '/app3', component: httpVueLoader('../../app/sections/test/App3.vue') }
            ])
        },

        components: {
            'navbar': httpVueLoader('../../app/shareds/NavBar.vue'),
            'navdrawer': httpVueLoader('../../app/shareds/NavDrawer.vue'),
            'appfooter': httpVueLoader('../../app/shareds/Footer.vue')
        },

        methods: {
            test: function(direzione) {
                alert(direzione);
                console.log(router);

                router.push(direzione);
            }
        }
    }
</script>

<style>

</style>
