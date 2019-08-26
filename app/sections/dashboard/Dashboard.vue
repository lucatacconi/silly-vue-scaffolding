<template>
    <div>
        <v-card>
            <v-card-title>Silly-vue-scaffolding</v-card-title>
            <v-card-text class="pt-5">
                <p class="text-justify">
                    Vue/Vuetify, combined with systems such as Webpack, Browserify or Vue-cli becomes an extremely easy and versatile development tool.
                    Compiling all Vue files in a single file, even if useful for a more rapid execution of the application, sometimes becomes a brake for
                    debugging, analysis of functioning on production servers or last minute changes.
                </p>
                <p class="text-justify">
                    <span class="font-weight-bold">Silly-Vue-Scaffolding</span> is an easy way to release modular <span class="font-weight-bold">Vue/Vuetify</span>
                    applications, thus composed of several Vue files. Vue components are loaded but not compiled and made available using the
                    <a href="https://github.com/FranckFreiburger/http-vue-loader">FranckFreiburger/http-vue-loader</a> library.
                </p>
                <p class="text-justify">
                    Natively <span class="font-weight-bold">Silly-Vue-Scaffolding</span> includes an API section based on <span class="font-weight-bold">Slim</span>
                    and protected by <span class="font-weight-bold">JWT</span> (<a href="https://github.com/tuupola/slim-jwt-auth">tuupola/slim-jwt-auth</a>.
                    A login page allows users to access to application's main area whose frontend is based on <span class="font-weight-bold">Vuetify</span>.
                    The application menu is managed dynamically created, based on a specific configuration file that identifies items and filtered them based
                    on the user's access level. The content of the main application area is managed via <span class="font-weight-bold">Vue Router</span>.
                </p>

                <v-carousel class="mt-10 mb-10">
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
                    Specific configuration files make it possible to easily configure all running parameters of the application.
                    The custom sections can be added to the sections directory and recalled via an entry in the specific configuration
                    file that identifies the sections that can be recalled in the main menu.
                </p>
                <p class="text-justify">
                    Read specific sections of this document to install and configure the application.
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
