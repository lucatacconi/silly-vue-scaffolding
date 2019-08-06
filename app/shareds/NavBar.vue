<template id="navigator" lang="html">
    <v-app-bar app clipped-right color="blue-grey" dense dark>
        <v-app-bar-nav-icon @click="drawer()" ></v-app-bar-nav-icon>
        <v-toolbar-title>Page title</v-toolbar-title>
        <v-spacer></v-spacer>
        <navbartools></navbartools>
        <userinfo></userinfo>
    </v-app-bar>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {}
        },
        methods: {
            drawer:function(){
                this.$emit("drawer")
            }
        },
        components: {
            'userinfo': httpVueLoader('../../app/shareds/UserInfo.vue'),
            'navbartools': httpVueLoader('../../app/shareds/NavBarTools.vue')
        }
    }
</script>

<style>
</style>
