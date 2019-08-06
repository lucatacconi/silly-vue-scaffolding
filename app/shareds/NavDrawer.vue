<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            app
            mobile-break-point="0"
        >
            <v-list dense>
                <template v-for="navItem in navMap">
                    <v-list-group
                        v-if="navItem.type == 'SUBM'"
                        value="navItem.layout.expanded"
                        :key="navItem.id"
                        :prepend-icon="navItem.layout.expanded ? navItem.layout.iconExpanded : navItem.layout.icon"
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ navItem.title }}
                                </v-list-item-title>
                                <v-list-item-subtitle v-if="navItem.subtitle">
                                    {{ navItem.subtitle }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </template>

                        <v-list-item
                            v-for="subItem in navItem.subMenuItems"
                            :key="subItem.title"
                            @click="test('Test sub')"
                        >
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ subItem.title }}
                                </v-list-item-title>
                                <v-list-item-subtitle v-if="subItem.subtitle">
                                    {{ subItem.subtitle }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>

                    <v-divider v-if="navItem.type == 'DIV'" :key="navItem.id"></v-divider>

                    <v-list-item v-else-if="navItem.type == 'ELM'" :key="navItem.id" @click="test('Test el')">
                        <v-list-item-icon>
                            <v-icon>{{ navItem.layout.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>
                                {{ navItem.title }}
                            </v-list-item-title>
                            <v-list-item-subtitle v-if="navItem.subtitle">
                                {{ navItem.subtitle }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
    <div>
</template>

<script>
module.exports = {
    data:function(){
        return{
        }
    },
    computed: {
        navMap: function () {
            return this.navmap;
        }
    },


    props:['drawer','selection', 'navmap'],
    watch: {
        // selection:function(){
        //     for(var i=0;i<this.items.length;i++){
        //         if(i==this.selection){
        //             this.items[i].color="blue"
        //         }else{
        //             this.items[i].color="black"
        //         }
        //     }
        // }
    },
    methods: {


        test:function(message){
            alert(message);
            //this.$emit('navto', direzione);
        },


        // NavTo:function(direzione){
        //     router.push(direzione);
        //     //this.$emit('navto', direzione);
        // },


        // launchEvent:function(item,i){
        //     if(item.enable!=undefined&&item.enable){
        //         if(item.action!="link"){
        //             this.$emit('select',i)
        //         }

        //         if(item.action=="link"){
        //             window.open(item.href,item.target)
        //         }
        //     }else{
        //         Swal.fire({
        //             type: 'error',
        //             title: 'Item disabled',
        //             html: 'This item is disabled!'
        //         })
        //     }
        // }
    },
    mounted:function() {

        //self = this;

        // var self=this
        // Utils.apiCall("get", "/util/menu")
        // .then(function (response) {
        //     // Utils.showLoadingOFF();
        //     if(response.statusText=="OK"){
        //         self.items=response.data.menu
        //         self.items[0].color="blue"
        //     }else{
        //         Swal.fire({
        //             type: 'error',
        //             title: 'Error menu api',
        //             html: 'Something went wrong!'
        //         })
        //     }
        // });
    }
}
</script>
