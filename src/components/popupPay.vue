<template>
    <div>
        <h1 class="mt-5 text-2xl font-bold">Choose Payment Method</h1>
        <div class="flex flex-col gap-2 mt-10">
            <div class="flex items-center gap-5 lg:gap-10 hover:cursor-pointer pl-40 lg:pl-60 h-12 bg-slate-300 hover:bg-green-300 border-b-[1px] border-slate-400" @click="selectPay('bri')">
                <img src="../assets/beranda/bank/bri.svg" alt="" width="50">
                <span>BRI</span>
            </div>
            <div class="flex items-center gap-5 lg:gap-10 hover:cursor-pointer pl-40 lg:pl-60 h-12 bg-slate-300 hover:bg-green-300 border-b-[1px] border-slate-400" @click="selectPay('bni')">
                <img src="../assets/beranda/bank/bni.svg" alt="" width="50">
                <span>BNI</span>
            </div>
            <div class="flex items-center gap-5 lg:gap-10 hover:cursor-pointer pl-40 lg:pl-60 h-12 bg-slate-300 hover:bg-green-300 border-b-[1px] border-slate-400" @click="selectPay('mandiri')">
                <img src="../assets/beranda/bank/mandiri.svg" alt="" width="50">
                <span>MANDIRI</span>
            
            </div>
            <div class="flex items-center gap-5 lg:gap-10 hover:cursor-pointer pl-40 lg:pl-60 h-12 bg-slate-300 hover:bg-green-300 border-b-[1px] border-slate-400" @click="selectPay('mandiri')">
                <img src="../assets/beranda/bank/bca.svg" alt="" width="50">
                <span>BCA</span>
            
            </div>
            <div class="flex items-center gap-5 lg:gap-10 hover:cursor-pointer pl-40 lg:pl-60 h-12 bg-slate-300 hover:bg-green-300 border-b-[1px] border-slate-400" @click="selectPay('gopay')">
                <img src="../assets/beranda/bank/gopay.svg" alt="" width="50">
                <span>Gopay</span>
            </div>
            <div class="flex items-center gap-5 lg:gap-10 hover:cursor-pointer pl-40 lg:pl-60 h-12 bg-slate-300 hover:bg-green-300 border-b-[1px] border-slate-400" @click="selectPay('cash')">
                <Icon icon="fa-solid:money-bill-wave-alt" class="text-4xl text-third    " width="50"/>
                <span>Cash</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        selectPay(method){
            this.$emit('selectPay',method)
        }
    }
}
</script>

<style>

</style>