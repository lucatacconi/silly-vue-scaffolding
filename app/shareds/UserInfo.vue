<template id="userinfo" lang="html">
    <v-menu
        left
        bottom
    >
        <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
            <v-icon>account_circle</v-icon>
        </v-btn>
        </template>

        <v-list>
        <v-list-item
            v-for="(item,i) in items"
            :key="i"
            @click="click()"
        >
            <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
        </v-list>
    </v-menu>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {
                items:[
                ]
            }
        },
        methods: {
            click:function(){
                alert("click")
            }
        },
        created() {
            var info = Utils.parseJwt(localStorage.getItem('token'))
            this.items.push('User: '+info.username)
            this.items.push('Expire: '+moment(info.exp).format('DD/MM/YYYY HH:MM:SS'))
            this.items.push('Logout')
        },
    }
</script>

<style>
</style>
