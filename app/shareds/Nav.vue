<template id="loading" lang="html">
    <div class="text-xs-center">
        NAV
        <br>
        <user></user>
    </div>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {
                title: 'NAV'
            }
        },
        components: {
            'user': httpVueLoader('../../app/shareds/User.vue')
        },
    }
</script>

<style>

</style>
