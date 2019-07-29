<template id="appfooter" lang="html">
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-flex
        text-center
        xs12
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-flex>
    </v-footer>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {
            }
        }
    }
</script>

<style>
</style>
