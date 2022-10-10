<template>
    <nav class="bg-white fixed w-full h-full z-[20] flex flex-col justify-center gap-5">
      <Button nama="Beranda" class="bg-gray-300 h-20 rounded-md flex items-center justify-center" @click="selectMenu"/>
      <Button nama="Fitur" class="bg-gray-300 h-20 rounded-md flex items-center justify-center" @click="selectMenu"/>
      <Button nama="Tentang" class="bg-gray-300 h-20 rounded-md flex items-center justify-center" @click="selectMenu"/>
    </nav>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    components:{Button},
    methods:{
        selectMenu(e){
            this.$emit('clickMenu',e.target.innerHTML.toLowerCase())
        }
    }
}
</script>

<style>

</style>