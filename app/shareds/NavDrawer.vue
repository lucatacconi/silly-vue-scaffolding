<template>
    <v-navigation-drawer
        v-model="drawer"
        app
        mobile-break-point="0"
    >
        <v-list
            nav
            dense
        >

            <template v-for="(item,i) in items">
                <v-list-item
                    :key="i"
                    v-if="item.header==undefined&&item.enable"
                    @click="launchEvent(item,i)"
                >
                    <v-list-item-icon>
                        <v-icon :color="item.color!='' ? item.color : 'black'">
                            {{item.icon}}
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title
                        :class="item.color!='' ? item.color+'--text' : 'black--text'"
                    >
                        {{item.title}}
                    </v-list-item-title>
                </v-list-item>
                <v-subheader v-else-if="item.enable" :key="i">{{item.header.toUpperCase()}}</v-subheader>
            </template>

        </v-list>
    </v-navigation-drawer>
</template>

<script>
module.exports = {
    data:function(){
        return{
            items:[]
        }
    },
    props:['drawer','selection'],
    watch: {
        selection:function(){
            for(var i=0;i<this.items.length;i++){
                if(i==this.selection){
                    this.items[i].color="blue"
                }else{
                    this.items[i].color="black"
                }
            }
        }
    },
    methods: {
        launchEvent:function(item,i){
            this.$emit('select',i)
        }
    },
    created:function() {
        var self=this
        Utils.apiCall("get", "/util/menu")
        .then(function (response) {
            Utils.showLoadingOFF();
            if(response.statusText=="OK"){
                self.items=response.data.menu
                self.items[0].color="blue"
            }else{
                Swal.fire({
                    type: 'error',
                    title: 'Error menu api',
                    html: 'Something went wrong!'
                })
            }
        });
    }
}
</script>
