<template id="navigator" lang="html">
    <div>
        <navbar></navbar>
        <appfooter></appfooter>
   </div>
</template>

<script type="text/javascript">
    module.exports = {
        data: function() {
            return {

            }
        },
        components: {
            'navbar': httpVueLoader('../../app/shareds/NavBar.vue'),
            'appfooter': httpVueLoader('../../app/shareds/Footer.vue')
        }
    }
</script>

<style>

</style>
