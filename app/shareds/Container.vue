<template id="container" lang="html">
    <div>
        <loading v-if="showloading"></loading>

        <login v-if="!logged"></login>
        <user v-else></user>
    </div>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {
                logged: false
            }
        },
        props: ['showloading'],
        components: {
            'loading': httpVueLoader('../../app/shareds/Loading.vue'),
            'login': httpVueLoader('../../app/sections/login/Login.vue'),
            'user': httpVueLoader('../../app/shareds/User.vue')
        }
    }
</script>

<style>

</style>
