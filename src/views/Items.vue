<template>
  <div class="h-screen bg-primary flex">
        <NavbarDashboard />
        <Icon icon="fontisto:nav-icon-a" class="text-2xl lg:hidden absolute top-3 left-3 z-10" @click="clickNav" v-show="navActive"/>
        <NavMobile :isMobile="isMobile" :navActive="navActive" @clickClose="clickClose"/>

        <div class="w-full flex flex-col items-center relative">
            <div class="flex lg:flex-row flex-col items-center w-3/4 mt-16 gap-5">
                <InputButton icon="akar-icons:search" class="h-10 w-full lg:w-[80%] lg:order-1 order-2" @inputSearch="onSearch"/>
                <router-link to="/items/add" class="w-1/2 lg:order-2 order-1">
                    <Button nama="Tambah Barang" class="bg-blue-500 text-white w-full"/>
                </router-link>
            </div>
            <TableItems class="w-[95%] lg:w-3/4 mt-10 h-96 overflow-auto" :items="items"/>
        </div> 
    </div>
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue'
import TableItems from '@/components/TableItems.vue'
import InputButton from '@/components/InputButton.vue'
import Button from '@/components/Button.vue'
import NavMobile from '@/components/navMobile.vue'

export default {
    data(){
        return{
            items:[],
            data:[],
            isMobile:false,
            navActive : true
        }
    },
    methods:{
        clickNav(){
            this.isMobile = !this.isMobile
            this.navActive = !this.navActive
        },
        clickClose(){
            this.isMobile = !this.isMobile
            this.navActive = !this.navActive
        },
        onSearch(val){
            const itemsFind = []
            this.data.forEach(item => {
                if (item.nama.startsWith(val)){
                    itemsFind.push(item)
                }
            })
            this.items = itemsFind
        }
    },
    components:{
        NavbarDashboard,TableItems,InputButton,Button,NavMobile
    },
    created(){
        fetch('http://localhost:3000/items')
            .then(res => res.json())
            .then(data => {
                this.items = data
                this.data = data
            })
    }
}
</script>

<style>

</style>