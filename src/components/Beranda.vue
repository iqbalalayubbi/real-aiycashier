<template>
    <div class="h-full">
        <Navbar class="h-20 fixed z-[99] top-0  w-full transition-all duration-300" :class="[isScroll ? 'bg-slate-300' : '']"/>
        <div class="h-20"></div>
        <Banner class="mt-20"/>
    </div>
</template>

<script>
import Navbar from '@/components/NavbarHome.vue'
import Banner from '@/components/Banner.vue'

export default {
    name:'Beranda-Comp',
    data(){
        return{
            isScroll : false
        }
    },
    components:{ Navbar,Banner },
    methods:{
        onScroll(){
            window.scrollY > 200 ? this.isScroll = true : this.isScroll = false
        }
    },
    created(){
        window.addEventListener('scroll',this.onScroll)
    }
}
</script>
