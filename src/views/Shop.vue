<template>
  <div class="bg-primary flex">
        <NavbarDashboard />
        <Icon icon="fontisto:nav-icon-a" class="text-2xl lg:hidden fixed top-3 left-3 z-10" @click="clickNav" v-show="navActive"/>
        <NavMobile :isMobile="isMobile" :navActive="navActive" @clickClose="clickClose"/>
        <div class="w-full flex flex-col items-center relative">
            <div class="flex flex-col items-center gap-3 mt-10 lg:mt-16">
                <img src="../assets/beranda/defaut-shop.svg" alt="" class="lg:w-40 w-20 h-20 lg:h-40 rounded-full border-4 border-white opacity-60" ref="img">
                <div class="flex items-center hover:cursor-pointer mt-3">
                    <Icon icon="akar-icons:edit" />
                    <label class="hover:cursor-pointer">
                        <input type="file" class="hidden" ref="file" @change="uploadImg"/>
                        <span>Edit Foto</span>
                    </label>
                </div>
                <div class="flex items-center gap-2 hover:cursor-pointer hover:opacity-60">
                    <Icon icon="fluent:preview-link-16-filled" />
                    <span>Preview</span>
                </div>
            </div>
            <div class="lg:w-[40%] w-full flex lg:flex-row flex-col items-center gap-5 lg:mt-5 mt-8">
                <div class="w-[80%] lg:w-1/2 ">
                    <Input nama="Nama Toko" />
                    <Input nama="Email" class="mt-3"/>
                </div>
                <div class="w-[80%] lg:w-1/2 ">
                    <Input nama="Alamat" />
                    <Input nama="Pemilik" inputClass="bg-gray-200" class="mt-3"/>
                </div>
            </div>
            <div class="flex flex-col items-center mt-8 gap-5 w-[80%] lg:w-[40%] mb-10">
                <Button nama="Simpan" class="text-white bg-second w-full" @click="this.$router.push('/dashboard')"/>
                <Button nama="Kembali" class="text-white bg-third w-full" @click="this.$router.push('/dashboard')"/>
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
    components:{
        NavbarDashboard,
        Input,
        Button,
        NavMobile
    },
    methods:{
        clickNav(){
            this.isMobile = !this.isMobile
            this.navActive = !this.navActive
        },
        clickClose(){
            this.isMobile = !this.isMobile
            this.navActive = !this.navActive
        }
    }
}
</script>

<style>

</style>