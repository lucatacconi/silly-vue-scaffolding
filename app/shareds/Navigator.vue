<template id="navigator" lang="html">
    <div>
        <navbar v-on:drawer="drawer=!drawer "></navbar>
        <navdrawer :drawer="drawer" v-on:select="selection=$event" :selection="selection" v-on:navto="test($event)"></navdrawer>

        <v-container fluid fill-height>
            <v-layout>
                <v-flex>
                    <router-view></router-view>
                </v-flex>
            </v-layout>
        </v-container>

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
                { path: '/app1', component: httpVueLoader('../../app/sections/test/App1.vue') },
                { path: '/app2', component: httpVueLoader('../../app/sections/test/App2.vue') },
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
