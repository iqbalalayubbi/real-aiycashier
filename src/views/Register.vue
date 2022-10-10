<template>
    <div class="h-screen bg-primary" :class="[isResize ? 'h-auto':'']">
        <router-link to="/"><img class="pt-8 pl-8 lg:w-[200px] w-40" src="../assets/beranda/logo.svg" alt=""></router-link>
        <div class="flex flex-col items-center h-[70%] mt-10">
            <div class="flex bg-gray-300 rounded-4xl justify-center items-center flex-col gap-5 lg:w-1/2 w-[90%] lg:pb-0 pb-5" :class="[isResize ? '':'h-full']">
                <h1 class="text-center font-bold text-2xl mt-3 lg:mt-0">Buat Akun Baru</h1>
                <Input class="lg:w-96 w-72" nama="username" type="text" @onFocus="onFocus"/>
                <Input class="lg:w-96 w-72" nama="password" type="password" @onFocus="onFocus"/>
                <Input class="lg:w-96 w-72" nama="confirm password" type="password" @onFocus="onFocus"/>
                <Button class="bg-second w-40 text-white lg:mt-8 mt-0" nama="Buat Akun"/>
            </div>
            <span class="mt-3">
                Sudah memiliki akun ?
                <router-link to="/login" class="font-bold">Masuk</router-link>
            </span>
        </div>
    </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

export default {
    data(){
        return{
            isResize : false
        }
    },
    components:{
        Input,Button
    },
    methods:{
        onFocus(){
            console.log(this.isResize)
        },
        onResize(){
            if (window.innerHeight <= 461) this.isResize = true
            else this.isResize = false
        }
    },
    created(){
        window.addEventListener('resize',this.onResize)
    }
}
</script>

<style>

</style>