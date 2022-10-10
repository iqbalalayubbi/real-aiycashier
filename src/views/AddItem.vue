<template>
  <div class="bg-primary flex">
    <NavbarDashboard />
    <Icon icon="fontisto:nav-icon-a" class="text-2xl lg:hidden absolute top-3 left-3 z-10" @click="clickNav" v-show="navActive"/>
    <NavMobile :isMobile="isMobile" :navActive="navActive" @clickClose="clickClose"/>

    <div class="w-full flex flex-col items-center relative">
        <h1 class="mt-3 mb-3 text-2xl font-bold">Tambah Barang</h1>
        <img src="../assets/beranda/defaut-item.svg" alt="" class="w-32 h-32 rounded-full border-4 border-white opacity-60" ref="img">
        <div class="flex items-center hover:cursor-pointer mt-3 gap-2">
            <Icon icon="akar-icons:edit" />
            <label class="hover:cursor-pointer">
                <input type="file" class="hidden" ref="file" @change="uploadImg"/>
                <span>ganti foto</span>
            </label>
        </div>
        <div class="mt-5 lg:mt-3 flex lg:flex-row flex-col lg:flex-wrap justify-center w-3/4 gap-x-5 lg:gap-y-3 gap-y-5">
          <Input nama="Nama Barang" class="w-full lg:w-[40%]"/>
          <Input nama="Modal" class="w-full lg:w-[40%]"/>
          <Input nama="Kategori" class="w-full lg:w-[40%]"/>
          <Input nama="Harga" class="w-full lg:w-[40%]"/>
          <Input nama="Satuan" class="w-full lg:w-[40%]"/>
          <Input nama="Stok" class="w-full lg:w-[40%]"/>
        </div>
        <div class="flex flex-col items-center gap-5 w-3/4 lg:w-1/2 mt-10 mb-10">
          <Button nama="Tambah" class="text-white bg-third w-full" @click="addItem"/>        
          <Button nama="Kembali" class="text-white bg-second w-full" @click="this.$router.push('/items')"/>        
        </div>
    </div> 
  </div>
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import NavMobile from '@/components/navMobile.vue'

export default {
    data(){
      return{
        isMobile:false,
        navActive : true
      }
    },
    components:{NavbarDashboard,Input,Button,NavMobile},
    methods:{
        clickNav(){
            this.isMobile = !this.isMobile
            this.navActive = !this.navActive
        },
        clickClose(){
            this.isMobile = !this.isMobile
            this.navActive = !this.navActive
        },
        uploadImg(){
              const ref = this.$refs
              const img = ref.img
              const file = ref.file.files[0]
              const src = URL.createObjectURL(file)
              img.setAttribute('src',src)
              img.style.opacity = '1'
        },
        addItem(){
            this.$swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Barang berhasil ditambahkan',
              showConfirmButton: false,
              timer: 1000
            }).then(res => {
              this.$router.push('/items')
            })
        }
    }
}
</script>

<style>

</style>