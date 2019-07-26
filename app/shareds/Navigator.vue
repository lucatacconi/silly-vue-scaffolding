<template id="navigator" lang="html">
    <div class="text-xs-center">
        NAVIGATION AREA
    </div>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {

            }
        },
        components: {
            'navbar': httpVueLoader('../../app/shareds/NavBar.vue')
        }
    }
</script>

<style>

</style>
