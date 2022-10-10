<template>
    <div class="h-screen bg-primary flex">
        <NavbarDashboard />
        <Icon icon="fontisto:nav-icon-a" class="text-2xl lg:hidden absolute top-3 left-3 z-10" @click="clickNav" v-show="navActive"/>
        <NavMobile :isMobile="isMobile" :navActive="navActive" @clickClose="clickClose"/>

        <div class="w-full flex flex-col items-center relative">
            <h1 class="mt-16 text-2xl lg:mt-10 lg:text-4xl font-bold">Tambah User Baru</h1>
            <div class="w-3/4 lg:w-1/3 gap-3 flex flex-col mt-10">
                <Input nama="Username" class="w-full"/>
                <Input nama="Password" class="w-full"/>
                <Input nama="Role" class="w-full"/>
            </div>
            <div class="flex flex-col items-center w-3/4 lg:w-1/3 gap-5 mt-10 lg:mb-0 mb-10">
                <Button nama="Tambah User" @click="this.$router.push('/users')" class="text-white bg-third w-full"/>
                <Button nama="Kembali" @click="this.$router.push('/users')" class="text-white bg-second w-full"/>
            </div>
        </div> 
    </div>
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import NavMobile from '@/components/navMobile.vue'

export default {
    data(){
        return{
            isMobile:false,
            navActive : true
        }
    },
    components:{
        Input,Button,NavbarDashboard,NavMobile
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
    }
}
</script>

<style>

</style>