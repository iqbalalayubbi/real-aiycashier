<template>
  <div class="bg-white h-1/2 w-full flex flex-col items-center gap-5 relative">
    <div class="lg:w-8/12 w-full absolute flex justify-between">
        <img src="../assets/beranda/coin-left.svg" alt="" class="lg:ml-20 ml-0 lg:w-[130px] w-20">
        <img src="../assets/beranda/coin-right.svg" alt="" class="lg:mr-24 mr-0 lg:w-[130px] w-20">
    </div>
    <h1 class="text-center font-bold text-2xl lg:text-4xl lg:pt-16 pt-10 z-10">Buat Kasir Online Digital <br> Pertamamu</h1>
    <p class="text-center w-80 lg:w-1/3">buka usahamu mulai dari nol dan lakukanlah transaksi sebanyak mungkin untuk mendapatkan keuntungan maksimal</p>
    <router-link to="/register" class="lg:w-1/6 w-40"><Button class="bg-second w-full  text-white hover:opacity-80 transition-all duration-300" nama="Buka Toko"/></router-link>
    <img src="../assets/beranda/bg-left-toko.svg" alt="" class="absolute left-10 bottom-0 lg:w-[250px] w-16">
    <img src="../assets/beranda/bg-right-toko.svg" alt="" class="absolute right-10 -bottom-2 lg:w-[250px] w-16">
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    components:{Button}
}
</script>

<style>

</style>