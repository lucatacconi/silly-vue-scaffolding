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
            var temp=[
                {
                    path:"/app1",
                    component:"../../app/sections/test/App1.vue"
                },
                {
                    path:"/app2",
                    component:"../../app/sections/test/App2.vue"
                },
                {
                    path:"/app3",
                    component:"../../app/sections/test/App3.vue"
                }
            ]
            var routes=[]
            for(var i=0;i<temp.length;i++){
                var t={}
                t={
                    path:temp[i].path,
                    component: httpVueLoader(temp[i].component)
                }
                routes.push(t)
                // router.addRoutes([
                //     { path: temp[i].path, component: httpVueLoader(temp[i].component) },
                // ])
            }

            var self=this
            Utils.apiCall("get", "/util/routes")
            .then(function (response) {
                console.log(response)
                if(response.statusText=="OK"){
                    routes=[]
                    console.log(response.data.routes)
                    for(var i=0;i<response.data.routes.length;i++){
                        self.$router.addRoutes([
                            { path: response.data.routes[i].path, component: httpVueLoader(response.data.routes[i].component) },
                        ])
                    }
                }else{
                    Swal.fire({
                        type: 'error',
                        title: 'Error routes api',
                        html: 'Something went wrong!'
                    })
                }
            })
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
