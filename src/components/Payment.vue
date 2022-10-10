<template>
    <div class="bg-gray-200 flex flex-col items-center justify-center gap-6">
        <img :src="src" alt="">
        <h1 class="text-4xl font-bold text-second">Rp{{total}}</h1>
        <div class="flex flex-col items-center gap-3" v-show="isCash">
            <Input placeholder="nominal" v-model="nominal" @input="getChange" />
            <h1 class="text-2xl font-bold">{{status}}</h1>
            <span class="text-lg font-bold " :class="[isMinus ? 'text-red-500' : 'text-third']">Rp{{kembalian}}</span>
        </div>
        <Button nama="Bayar" class="w-40 bg-third text-white" @click="clickBayar"/>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'

export default {
    data(){
        return{
            nominal:0,
            kembalian:0,
            isMinus : false,
            status:''
        }
    },
    props:{
        src : String,
        isCash : Boolean,
        total:Number
    },
    components:{Button,Input},
    methods:{
        clickBayar(){
            this.$emit('clickBayar')
        },
        getChange(e){
            this.kembalian = parseInt(e.target.value) - parseInt(this.total)       
            if(this.kembalian <= 0 ) {
                this.isMinus = true 
                this.status = 'Kurang'
            }else{
                this.isMinus = false
                this.status = 'Kembalian'
            }
        }
    }
}
</script>

<style>

</style>