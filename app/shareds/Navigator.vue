<template id="navigator" lang="html">
    <div>
        <navbar v-on:drawer="drawer=!drawer "></navbar>
        <navdrawer :drawer="drawer" v-on:select="selection=$event" :navmap="navmap" :selection="selection"></navdrawer>

        <v-content>
            <v-container fluid fill-height>
                <v-layout>
                    <v-flex>
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
                drawer: "true",
                routes: [],
                navmap: [],
                selection:0
            }
        },

        mounted: function(){

            self = this;

            // this.navmap = 1;

            // setTimeout(function(){ self.navmap = 1 }, 500);

            Utils.apiCall("get", "/navigation/")
            .then(function (response) {

                if (typeof response.data.routes !== 'undefined' && response.data.routes.length > 0) {
                    for(var i=0; i<response.data.routes.length; i++){
                        self.$router.addRoutes([
                            { path: response.data.routes[i].path, component: httpVueLoader(response.data.routes[i].component) },
                        ])
                    }
                }

                if (typeof response.data.navMap !== 'undefined' && response.data.navMap.length > 0) {
                    self.navmap = response.data.navMap;
                }
            });
        },

        components: {
            'navbar': httpVueLoader('../../app/shareds/NavBar.vue'),
            'navdrawer': httpVueLoader('../../app/shareds/NavDrawer.vue'),
            'appfooter': httpVueLoader('../../app/shareds/Footer.vue')
        },

        methods: {
        }
    }
</script>

<style>
</style>
