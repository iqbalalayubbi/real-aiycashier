<template>
  <div class="relative pb-10">
    <DataPeople class="w-full"/>
    <h1 class="lg:pt-20 pt-60 text-4xl font-bold text-center text-white">Fitur</h1>
    <div class="flex flex-col lg:flex-row items-center lg:justify-center lg:gap-20 gap-5 px-5 mt-10 lg:h-[55%]">
        <div class="flex flex-col items-center bg-white w-full lg:w-1/4 rounded-xl lg:h-full">
            <h1 class="text-2xl font-bold lg:mt-10 mt-3">Pembayaran Mudah</h1>
            <span class="w-[90%] mt-5 lg:mt-10">AiyCashier support pembayaran bank dan e-wallet seperti berikut :</span>
            <div class="flex justify-center flex-wrap gap-5 w-64 lg:mt-10 mt-6">
              <img src="../assets/beranda/bank/bri.svg" alt="" width="70">
              <img src="../assets/beranda/bank/mandiri.svg" alt="" width="70">
              <img src="../assets/beranda/bank/bca.svg" alt="" width="70">
              <img src="../assets/beranda/bank/bni.svg" alt="" width="70">
              <img src="../assets/beranda/bank/gopay.svg" alt="" width="70">
            </div>
        </div>
        <CardFeature title="Kelola Karyawan dengan mudah" value="AiyCashier memiliki fitur kelola karyawan untuk mempermudah anda dalam mengontrol penjualan dan keluar masuk uang dari jarak jauh."/>
        <CardFeature title="Laporan Usaha Terstruktur" value="Kami siap membantu anda dalam mengatur laporan usaha/dagang, secara struktur dan efisien."/>
    </div>
  </div>
</template>

<script>
import CardFeature from '@/components/CardFeature.vue'
import DataPeople from '@/components/DataPeople.vue'


export default {
    components:{    
        CardFeature,
        DataPeople
    }
}
</script>

<style>

</style>