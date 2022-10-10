<template>
  <div class="bg-primary h-screen" @mousewheel="onChange">
    <Beranda/>
    <Feature class="bg-third lg:h-screen" />
    <About class="bg-primary lg:h-screen lg:pt-28 pt-10"/>
    <Footer class="bg-second"/>
    <Icon v-show="isScroll" icon="bi:arrow-down-circle-fill" class="rotate-180 text-4xl fixed bottom-16 right-12 hover:cursor-pointer hover:opacity-60" @click="topBtn"/>
  </div>
</template>

<script>
import Beranda from '@/components/Beranda.vue'
import Feature from '@/components/Feature.vue'
import About from '@/components/About.vue'
import Footer from '@/components/Footer.vue'

export default {
    data(){
      return{
        isScroll : false
      }
    },
    components:{ Beranda, Feature, About, Footer },
    methods:{
      topBtn(){
        window.scroll({
          top: 0,
          left: 100,
          behavior: 'smooth'
        })
      },
      onChange(){
        window.scrollY > 370 ? this.isScroll = true : this.isScroll = false
      }
    },
    created(){
      window.addEventListener('scroll',this.onChange)
    }
}
</script>
