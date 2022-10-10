<template>
  <div class="bg-primary h-screen" @mousewheel="onChange">
    <div class=" fixed top-0 z-[99] w-screen flex h-16 items-center justify-between px-5" :class="isScroll ? 'bg-slate-300' : 'bg-transparent'">
      <router-link to='/'><img class="" src="../assets/beranda/logo.svg" alt="" width="150"></router-link>
      <Icon icon="fontisto:nav-icon-a" class="text-2xl lg:hidden" @click="clickNavMobile"/>
    </div>
    <NavHome @clickMenu="clickMenu" v-show="navMobile"/>
    <Beranda @onScroll="onScroll"/>
    <Feature class="bg-third lg:h-screen" />
    <About class="bg-primary lg:h-screen lg:pt-28 pt-10"/>
    <Footer class="bg-second"/>
    <Icon v-show="isScroll" icon="bi:arrow-down-circle-fill" class="rotate-180 text-4xl fixed bottom-16 opacity-100 hover:cursor-pointer hover:opacity-60" @click="topBtn" ref="iconTop" :class="[onFooter ? 'right-28 bg-white rounded-full' : 'right-12']"/>
  </div>
</template>

<script>
import Beranda from '@/components/Beranda.vue'
import Feature from '@/components/Feature.vue'
import About from '@/components/About.vue'
import Footer from '@/components/Footer.vue'
import NavHome from '@/components/NavHome.vue'
import Button from '@/components/Button.vue'

export default {
    data(){
      return{
        isScroll : false,
        onFooter:false,
        navMobile : false,
      }
    },
    components:{ Beranda, Feature, About, Footer,NavHome,Button},
    methods:{
      clickNavMobile(){
        this.navMobile = !this.navMobile
      },
      clickMenu(menu){
        let top = 0
        if (menu == 'beranda')top = 0 
        else if(menu == 'fitur') top = 903
        else top = 1755
    
        window.scroll({
            top,
            left: 100,
            behavior: 'smooth',
        })
        this.navMobile = false
      },
      topBtn(){
        window.scroll({
          top: 0,
          left: 100,
          behavior: 'smooth',
        })
      },
      onChange(){
        console.log(window.scrollY)
        // fitur > 740
        // about > 1600
        // beranda = 0
        window.scrollY > 370 ? this.isScroll = true : this.isScroll = false
        window.scrollY > 1750 ? this.onFooter = true : this.onFooter = false
      }
    },
    created(){
      window.addEventListener('scroll',this.onChange)
    }
}
</script>
