<template id="navigator" lang="html">
    <v-app-bar app clipped-right color="blue-grey" dense dark>
        <v-app-bar-nav-icon @click="drawer()" ></v-app-bar-nav-icon>
        <v-toolbar-title>
            {{appName}}
            <span class="subtitle-1 amber--text lighten-5" v-if="activeSection != ''"> - {{ activeSection }}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <navbartools></navbartools>
        <userinfo></userinfo>
    </v-app-bar>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {
                activeSection: ''
            }
        },
        computed:{
            appName: function () {
                return document.querySelector("meta[name='application-name']").getAttribute("content");
            },
        },
        methods: {
            drawer:function(){
                this.$emit("drawer")
            }
        },
        components: {
            'userinfo': httpVueLoader('../../app/shareds/UserInfo.vue'),
            'navbartools': httpVueLoader('../../app/shareds/NavBarTools.vue')
        },
        mounted: function(){
            this.activeSection = sessionStorage.getItem("activeSection");
        }
    }
</script>

<style>
</style>
