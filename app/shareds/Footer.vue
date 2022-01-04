<template id="appfooter" lang="html">
    <v-footer
      app inset
      dark
      color="secondary"
    >
        {{appName}} - {{appVersion}}
        <v-spacer></v-spacer>
        &copy; {{ new Date().getFullYear() }}
    </v-footer>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {}
        },
        computed:{
            appName: function () {
                return document.querySelector("meta[name='application-name']").getAttribute("content");
            },
            appVersion: function () {
                return document.querySelector("meta[name='application-version']").getAttribute("content");
            }
        }
    }
</script>

<style>
</style>
