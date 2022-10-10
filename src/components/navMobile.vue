<template>
<div class="fixed w-full bg-white h-screen  transition-all duration-300" v-show="isMobile" :class="[isMobile ? 'z-10' : 'z-0']">
    <nav class="flex flex-col justify-around items-center bg-green-300 h-full gap-3">
        <span class="bg-red-500 text-white w-full h-10 flex justify-center items-center rounded-md" @click="clickClose">Close</span>

        <router-link to="/profile" class="w-full">
            <div class="bg-second flex justify-center items-center text-white gap-5 rounded-md h-16 py-3">
                <img src="../assets/beranda/profile.svg" alt="" class="h-12 w-12 rounded-full border-4 border-white">
                <span>Profile</span>
            </div>
        </router-link>
        <router-link to="/dashboard" class="bg-white w-full mt-2 h-16 rounded-md flex justify-center" @click="clickClose">
            <div class="w-36 ml-10 h-full flex items-center gap-5">
                <Icon icon="ant-design:home-filled" class="text-xl hover:opacity-100"/>
                <span>Dashboard</span>
            </div>
        </router-link>  
        <router-link to="/cashier" class="bg-white w-full h-16 flex justify-center rounded-md">
            <div class="w-36 ml-10 h-full flex items-center gap-5">
                <Icon icon="fa6-solid:cash-register" class="text-xl hover:opacity-100"/>
                <span>Cashier</span>
            </div>
        </router-link>
        <router-link to="/users" class="bg-white w-full h-16 flex justify-center rounded-md">
            <div class="w-36 ml-10 h-full flex items-center gap-5">
                <Icon icon="icomoon-free:profile" class="text-xl hover:opacity-100"/>
                <span>Users</span>
            </div>
        </router-link>
        <router-link to="/items" class="bg-white w-full h-16 flex justify-center rounded-md">
            <div class="w-36 ml-10 h-full flex items-center gap-5">
                <Icon icon="bi:box-fill" class="text-xl hover:opacity-100"/>
                <span>Items</span>
            </div>
        </router-link>
        <router-link to="/chart" class="bg-white w-full h-16 flex justify-center rounded-md">
            <div class="w-36 ml-10 h-full flex items-center gap-5">
                <Icon icon="bi:bar-chart-line-fill" class="text-xl hover:opacity-100"/>
                <span>Chart</span>
            </div>
        </router-link>

        <router-link to="/shop" class="bg-white w-full h-16 flex justify-center rounded-md">
        <div class="w-36 ml-10 h-full flex items-center gap-5">
            <Icon icon="entypo:shop" class="text-xl hover:opacity-100"/>
            <span>Shop</span>
        </div>
        </router-link>
    </nav>
</div>
</template>

<script>
export default {
    props:{
        isMobile:Boolean,
        navActive:Boolean
    },
    methods:{
        clickClose(){
            this.$emit('clickClose')
        },
    },
    updated(){
        console.log(this.isMobile)
    }
}
</script>

<style>

</style>