<template id="navigator" lang="html">
    <div>
        <navbar v-on:drawer="drawer=!drawer "></navbar>
        <navdrawer :drawer="drawer" ></navdrawer>
        <v-card >fdfdf</v-card>
        <appfooter></appfooter>
   </div>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {
                drawer:true
            }
        },
        components: {
            'navbar': httpVueLoader('../../app/shareds/NavBar.vue'),
            'navdrawer': httpVueLoader('../../app/shareds/NavDrawer.vue'),
            'appfooter': httpVueLoader('../../app/shareds/Footer.vue')
        }
    }
</script>

<style>

</style>
