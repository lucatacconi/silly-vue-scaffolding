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


        <v-card>
            <v-card-text class="text-center mb-0 pb-0">
                <v-icon large>
                    account_circle
                </v-icon>
                <p>User: {{items.user}}</p>
                <p>Type: {{items.type}}</p>
                <p>Expire: {{items.expire}}</p>
            </v-card-text>
            <v-card-actions style="background:red;">
                <v-spacer></v-spacer>
                <v-btn block>
                    <v-icon >
                        exit_to_app
                    </v-icon>
                    Logout
                </v-btn>
            </v-card-actions>
        </v-card>
        <!-- <v-list>
        <v-list-item
            v-for="(item,i) in items"
            :key="i"
            @click="click()"
        >
            <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
        </v-list> -->
    </v-menu>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {
                items:{
                    user:"",
                    expire:"",
                    type:""
                }
            }
        },
        methods: {
            click:function(){
                alert("click")
            }
        },
        created() {
            var info = Utils.parseJwt(localStorage.getItem('token'))
            this.items.user=info.username
            this.items.type="Admin"
            this.items.expire=moment(info.exp).format('DD/MM/YYYY HH:MM:SS')
        },
    }
</script>

<style>
</style>
