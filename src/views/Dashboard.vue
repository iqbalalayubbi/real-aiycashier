<template>  
    <div class="h-screen bg-primary flex">
       <Navbar/>
       <Icon icon="fontisto:nav-icon-a" class="text-2xl lg:hidden absolute top-3 left-3 z-10" @click="clickNav" v-show="navActive"/>
        <NavMobile :isMobile="isMobile" :navActive="navActive" @clickClose="clickClose"/>

       <div class="w-full flex flex-col">
            <div class="w-full flex justify-center lg:h-40 lg:gap-16 mt-16 lg:mt-12 ">
                <CardDashboard class="bg-third text-white lg:w-[25%] lg:h-36 hidden lg:flex" nama="Laba" value="Rp125.000" icon="fa-solid:money-bill-wave-alt"/>
                <CardDashboard class="bg-third text-white lg:w-[25%] h-28 lg:h-36 w-[60%]" nama="Terjual" value="120 item" icon="carbon:report"/>
                <CardDashboard class="bg-third text-white lg:w-[25%] lg:h-36 hidden lg:flex" nama="Barang" value="500 item" icon="akar-icons:shipping-box-01"/>
            </div>
            <div class="flex flex-col lg:flex-row items-center justify-center lg:justify-center gap-3 lg:gap-5 lg:mt-10 mt-3 lg:h-10 h-40 ">
                <InputButton icon="akar-icons:search" class="lg:w-[50%] w-3/4 h-10"/>
                <input class="rounded-md px-5 focus:outline-none w-[40%] h-10 lg:w-[15%]" type="date">
            </div>
            <div class="flex justify-center lg:mt-10 mt-4 ">
                <TableTransaksi class="w-[90%] lg:w-[65%] h-52 lg:h-72" :transaksi="transaksi"/>
            </div>
       </div> 

    </div>
</template>

<script>
import Navbar from '@/components/NavbarDashboard.vue'
import CardDashboard from '@/components/CardDashboard.vue'
import InputButton from '@/components/InputButton.vue'
import TableTransaksi from '@/components/TableTransaksi.vue'
import NavMobile from '@/components/navMobile.vue'

export default {
    data(){
        return{
            data:[],
            transaksi:[],
            isMobile:false,
            navActive : true
        }
    },
    components:{
        Navbar, CardDashboard,InputButton,TableTransaksi,NavMobile
    },
    methods:{
        clickNav(){
            this.isMobile = !this.isMobile
            this.navActive = !this.navActive
        },
        clickClose(){
            this.isMobile = !this.isMobile
            this.navActive = !this.navActive
        }
    },
    created(){
        fetch('http://localhost:3000/transaksi')
        .then(res => res.json())
        .then(transaksi => {
            this.data = transaksi
            this.transaksi = transaksi
        })
    }
}
</script>

<style>

</style>