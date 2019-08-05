<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            app
            mobile-break-point="0"
        >
            <v-list nav dense>
                <template v-for="item in menu_items">
                    <v-list-group
                        v-if="item.subitems && item.subitems.length > 0 && item.layout.visible"
                        v-model="item.layout.opened"
                        :key="item.item"
                        :prepend-icon="item.layout.opened ? item.layout.icon : item.layout.iconClose"
                    >
                        <v-list-tile slot="activator">
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ item.item }}
                                </v-list-tile-title>
                                <v-list-item-subtitle v-if="item.subtext">
                                    {{ item.subtext }}
                                </v-list-item-subtitle>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile
                            v-for="(child, i) in item.subitems"
                            :key="i"
                            v-if="item.layout.visible"
                            @click.native="test1()"
                        >
                            <v-list-tile-action v-if="child.layout.icon">
                                <v-icon>{{ child.layout.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ child.item }}
                                </v-list-tile-title>
                                <v-list-item-subtitle v-if="child.subtext">
                                    {{ child.subtext }}
                                </v-list-item-subtitle>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>

                    <v-list-tile
                        v-else-if="!item.subitems && item.layout.visible"
                        :key="item.item"
                        @click.native="test2()"
                    >
                        <v-list-tile-action>
                            <v-icon>{{ item.layout.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.item }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>




            <!-- <v-list
                nav
                dense
            >

                <template v-for="(item,i) in items">
                    <v-list-item
                        :key="i"
                        v-if="item.header==undefined&&item.visible"
                        @click="launchEvent(item,i)"
                    >
                        <v-list-item-icon>
                            <v-icon :color="item.enable!='' ? item.color : 'red'">
                                {{item.icon}}
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title
                            :class="item.enable ? item.color+'--text' : 'red--text'"
                        >
                            {{item.title}}
                        </v-list-item-title>
                    </v-list-item>
                    <v-subheader v-else-if="item.visible" :key="i">{{item.header.toUpperCase()}}</v-subheader>
                </template>

                <v-divider></v-divider>

                <v-list-item @click="NavTo('app1')">
                    <v-list-item-icon>
                    <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title>App1</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item @click="NavTo('app2')">
                    <v-list-item-icon>
                    <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title>App2</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item @click="$router.push('app3')">
                    <v-list-item-icon>
                    <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title>App3</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list> -->
        </v-navigation-drawer>
    <div>
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

        NavTo:function(direzione){
            router.push(direzione);
            //this.$emit('navto', direzione);
        },


        launchEvent:function(item,i){
            if(item.enable!=undefined&&item.enable){
                if(item.action!="link"){
                    this.$emit('select',i)
                }

                if(item.action=="link"){
                    window.open(item.href,item.target)
                }
            }else{
                Swal.fire({
                    type: 'error',
                    title: 'Item disabled',
                    html: 'This item is disabled!'
                })
            }
        }
    },
    created:function() {
        var self=this
        Utils.apiCall("get", "/util/menu")
        .then(function (response) {
            // Utils.showLoadingOFF();
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
