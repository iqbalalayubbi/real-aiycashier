<template>
    <div class="h-auto lg:h-screen bg-primary flex">
        <NavbarDashboard />
        <Icon icon="fontisto:nav-icon-a" class="text-2xl lg:hidden absolute top-3 left-3 z-10" @click="clickNav" v-show="navActive"/>
        <NavMobile :isMobile="isMobile" :navActive="navActive" @clickClose="clickClose"/>

        <div class="w-full flex flex-col items-center relative">
            <div class="flex flex-col items-center mt-10 gap-3">
                <img src="../assets/beranda/default.svg" alt="" class="w-36 h-36 rounded-full border-4 border-white opacity-60" ref="img">
                <div class="flex items-center hover:cursor-pointer gap-2">
                    <Icon icon="akar-icons:edit" />
                    <label class="hover:cursor-pointer">
                        <input type="file" class="hidden" ref="file" @change="uploadImg"/>
                        <span>Edit Foto</span>
                    </label>
                </div>
            </div>
            <div class="flex lg:flex-row flex-col justify-center gap-10 mt-10 w-3/4">
                <div class="flex flex-col gap-5 w-full lg:w-64">
                    <Input nama="Username" type="text"/>
                    <Input nama="No hp" type="text"/>
                    <Input nama="Toko" type="text" inputClass="bg-gray-200"/>
                </div>
                <div class="flex flex-col gap-5 w-full lg:w-64">
                    <Input nama="Nama" type="text"/>
                    <Input nama="Alamat" type="text"/>
                    <Input nama="Role" type="text" inputClass="bg-gray-200"/>
                </div>
            </div>

            <div class="flex flex-col w-3/4 lg:w-96 mt-10 gap-4">
                <Button nama="Simpan" class="bg-third text-white" @click="this.$router.push('/dashboard')"/>
                <Button nama="Kembali" class="bg-second text-white" @click="this.$router.push('/dashboard')"/>
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
        Input,Button,NavbarDashboard,NavMobile
    },
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
        }
    }
}
</script>

<style>

</style>