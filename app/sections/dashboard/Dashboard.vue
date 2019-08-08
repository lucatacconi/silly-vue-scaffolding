<template>
    <div>
        <v-card>
            <v-card-title>Silly-vue-scaffolding</v-card-title>
            <v-card-text class="pt-5">
                <p class="text-justify">
                    <span class="font-weight-bold">Silly-vue-scaffolding</span> is an easy way to deploy un applicazione che comprende un sistema di autenticazione,
                    un sistema di sicurezza che si occupa di validare goni passaggio e ogni chiamata API basato su JWT, un sistama di navigazione che si appoggia su di
                    un menu configurabile che permette di accedere facilmente alle sezioni dell'applicazione.
                </p>

                <v-carousel class="mt-5 mb-5">
                    <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                        continuous=true
                    ></v-carousel-item>
                </v-carousel>


                <p class="text-justify">
                    <span class="font-weight-bold">Silly-vue-scaffolding</span> utilizza Slim3 per gestire le API legate all'applicazione, Vue e Vuetify, per la visualizzazione
                    del frontend, http-vue-loader per il loading delle sezioni applicative e vue router per orchestrare la navigazione all'interno delle sezioni.
                </p>

                <div class="title">System Requirements</div>

                <p class="text-justify">
                    Web server with URL rewriting
                    PHP 7.1.3 or newer
                    Composer
                </p>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                items:[
                    {
                        "src":"./../assets/images/login.png"
                    },
                    {
                        "src":"./../assets/images/user_details.png"
                    },
                    {
                        "src":"./../assets/images/navigation_menu.png"
                    }
                ]
            }
        }
    }
</script>

<style>
</style>
