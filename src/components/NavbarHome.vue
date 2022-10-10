<template>
    <nav class="lg:flex justify-between items-center lg:px-10 px-5 hidden">
        <router-link to='/'><img class="" src="../assets/beranda/logo.svg" alt="" width="150"></router-link>
        <div class=" w-2/6 lg:flex justify-around items-center hidden">
            <span class="text-second hover:cursor-pointer hover:opacity-50">Beranda</span>
            <span class="text-second hover:cursor-pointer hover:opacity-50">Fitur</span>
            <span class="text-second hover:cursor-pointer hover:opacity-50">Tentang</span>
            <router-link to="/register"><Button class="bg-second w-20 text-white hover:opacity-80" nama="Daftar"/></router-link>
            <router-link to="/login"><span class="text-second -ml-3 hover:cursor-pointer hover:opacity-50">Masuk</span></router-link>
        </div>
    </nav>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    name:'NavbarHome-Comp',
    components:{
        Button
    }
}
</script>