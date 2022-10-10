<template>
    <div class="h-screen bg-primary ">
        <div class="flex h-full">
            <router-link to="/"><img class="absolute top-8 left-8" src="../assets/beranda/logo.svg" alt="" width="150"></router-link>

            <div class="w-full lg:w-1/2 flex flex-col items-center justify-center">
                <div class="bg-gray-300 mt-10 w-3/4 lg:w-[60%] h-[60%] rounded-[20px] flex flex-col items-center lg:gap-8 gap-5">
                    <h1 class="mt-8 font-bold text-second text-2xl">Masuk</h1>
                    <Input class="w-[80%] text-xl" type="text" nama="username"/>
                    <Input class="w-[80%] text-xl" type="password" nama="password"/>
                    <Button class="w-[80%] bg-second text-white" nama="Masuk" @click="onLogin"/>
                </div>
                <span class="mt-3">
                    Belum memiliki akun ?
                    <router-link to="/register" class="font-bold">Daftar</router-link>
                </span>
            </div>

            <div class="w-1/2 bg-second hidden lg:flex flex-col justify-center items-center gap-10">
                <div class="flex flex-col items-center gap-10 w-[90%] h-[60%] ">
                    <Splide @splide:move="onChange" :options="options" aria-label="My Favorite Images" class="h-full splide">
                        <SplideSlide class="flex flex-col items-center gap-5">
                            <img src="../assets/beranda/thumb.svg" alt="Sample 1" width="400">
                        </SplideSlide>
                        <SplideSlide class="flex flex-col items-center gap-5">
                            <img src="../assets/beranda/thumb2.svg" alt="Sample 2" width="400">
                        </SplideSlide>
                        <SplideSlide class="flex flex-col items-center gap-5">
                            <img src="../assets/beranda/thumb3.svg" alt="Sample 2" width="400">
                        </SplideSlide>
                    </Splide>
                    <span class="text-white -mt-5">{{title}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'
// import '@splidejs/vue-splide/css/core';
import '@splidejs/vue-splide/css/sea-green';

import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

export default {
    data(){
        return{
        title:'',
        options :{
                type   : 'loop',
                autoplay : 'paused',
                interval:2000,
                pauseOnFocus : false,
            }   
        }
    },
    components:{
        Input,Button,Splide,SplideSlide,
    },
    methods:{
        onLogin(){this.$router.push('/dashboard')},
        onChange(splide,newIndex){
            if (newIndex == 0) this.title = 'Kontrol Laporan Penjualan Dengan Mudah!'
            else if (newIndex == 1) this.title = 'Atur Karyawanmu Dengan Mudah!'
            else this.title = 'Pantau Keuntunganmu Dengan Mudah!'
            
        }
    }
}
</script>

<style>

</style>