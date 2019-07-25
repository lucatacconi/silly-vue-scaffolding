<template id="login" lang="html">
    <v-app>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Login form</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text>
                            <v-form data-vv-scope="login-area">
                                <v-text-field
                                    v-model.trim="credentials.p_username"
                                    prepend-icon="person"
                                    name="login"
                                    label="Login"
                                    type="text"
                                    v-validate="{ required: true }"
                                    :error-messages="errors.collect('login-area.login')" >
                                </v-text-field>
                                <v-text-field
                                    v-model.trim="credentials.p_password"
                                    prepend-icon="lock"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    v-validate="{ required: true }"
                                    :error-messages="errors.collect('login-area.password')" >
                                </v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click.prevent="execLogin">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {
                valid: false,
                credentials: {
                    p_username: '',
                    p_password: ''
                }
            }
        },
        props: [],
        methods: {
            execLogin: function () {

                var self = this;

                this.$validator.validateAll('login-area').then((result) =>{
                    if (result) {
                        Edge.showloading = true;

                        axios.post('http://localhost/monolite/silly-vue-scaffolding/public/index.php/login', self.credentials)
                        .then(function (response) {
                            console.log(response);
                                            Edge.showloading = false;
                        })
                        .catch(function (error) {
                            console.log(error);
                                            Edge.showloading = false;
                        });
                    }
                });

                // Swal.fire(
                //     'Good job!',
                //     'You clicked the button!',
                //     'success'
                // )


                //axios.defaults.headers.common['Authorization'] = this.$store.state.user.accessToken;

            // if (self.$store.state.user.accessToken != '' && self.$store.state.user.sesso != 'M' && self.$store.state.user.sesso != 'F') {
            //     window.location.href = "../../sol/public/index.php?codpage=plg-asso";
            //     return;
            // }

            //     self.$validator.validateAll().then(function(result){
            //         if (result) {
            //             App.loading = true;
            //             Util.request("post", "/index.php/login", self.credentials)
            //             .then(function (response) {
            //                 var oRS = response.data.data;

            //                 self.$store.commit("userObject", {
            //                     userName: oRS.userName,
            //                     accessToken: oRS.accessToken,
            //                     flag0: oRS.flag0,
            //                     cognome: oRS.cognome,
            //                     nome: oRS.nome,
            //                     codfisc: oRS.codfisc,
            //                     mail: oRS.mail,
            //                     sesso: oRS.sesso,
            //                     ns_data: oRS.ns_data,
            //                     matricola: oRS.matricola
            //                 });

            //                 sessionStorage.setItem('userName', oRS.userName);
            //                 sessionStorage.setItem('accessToken', oRS.accessToken);
            //                 sessionStorage.setItem('flag0', oRS.flag0);
            //                 sessionStorage.setItem('cognome', oRS.cognome);
            //                 sessionStorage.setItem('nome', oRS.nome);
            //                 sessionStorage.setItem('codfisc', oRS.codfisc);
            //                 sessionStorage.setItem('mail', oRS.mail);
            //                 sessionStorage.setItem('sesso', oRS.sesso);
            //                 sessionStorage.setItem('ns_data', oRS.ns_data);
            //                 sessionStorage.setItem('matricola', oRS.matricola);

            //                 axios.defaults.headers.common['Authorization'] = oRS.accessToken;
            //                 Util.loadPageTemplate('Pannello');
            //                 App.loading = false;
            //             })
            //             .catch(function (error) {
            //                 swal({
            //                     type: 'error',
            //                     title: self.lang.error_login.form,
            //                     text: self.lang.error_login.error
            //                 }).catch(swal.noop);
            //                 App.loading = false;
            //             });
            //             return;
            //         }
            //     });
            }
        }
    }
</script>

<style>
    .swal-modal {
        font-family: Helvetica;
    }
</style>
