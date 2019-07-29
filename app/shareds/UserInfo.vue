<template id="userinfo" lang="html">
    <v-menu
        left
        bottom
    >
        <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        </template>

        <v-list>
        <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
        >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
        </v-list>
    </v-menu>
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
