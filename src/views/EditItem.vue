<template>
    <div class="bg-primary flex">
        <NavbarDashboard />
        <Icon icon="fontisto:nav-icon-a" class="text-2xl lg:hidden absolute top-3 left-3 z-10" @click="clickNav" v-show="navActive"/>
        <NavMobile :isMobile="isMobile" :navActive="navActive" @clickClose="clickClose"/>
        <div class="w-full flex flex-col items-center relative">
            <div class="flex flex-col items-center mt-10 gap-3">
                <img src="../assets/beranda/defaut-item.svg" alt="" class="w-32 h-32 rounded-full border-4 border-white opacity-60" ref="img">
                <div class="flex items-center hover:cursor-pointer gap-2" @change="changeImg">
                    <Icon icon="akar-icons:edit" />
                    <label class="hover:cursor-pointer">
                        <input type="file" class="hidden" ref="file" @change="uploadImg"/>
                        <span>Edit Foto</span>
                    </label>
                </div>
            </div>
            <div class="flex lg:flex-row flex-col justify-center gap-5 mt-10 w-3/4">
                <div class="flex flex-col gap-5 w-full lg:w-64">
                    <Input nama="Nama Barang" type="text"/>
                    <Input nama="Modal" type="text"/>
                    <Input nama="Kategori" type="text"/>
                </div>
                <div class="flex flex-col gap-5 w-full lg:w-64">
                    <Input nama="Harga" type="text"/>
                    <Input nama="Satuan" type="text"/>
                    <Input nama="Stok" type="text"/>
                </div>
            </div>

            <div class="flex flex-col w-3/4 lg:w-96 mt-10 mb-10 lg:mt-5 gap-4">
                <Button nama="Simpan" class="bg-third text-white" @click="this.$router.push('/items')"/>
                <Button nama="Kembali" class="bg-second text-white" @click="this.$router.push('/items')"/>
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
        changeImg(){
            const ref = this.$refs
            const file = ref.file.files[0]
            const img = ref.img
            const src = URL.createObjectURL(file)
            img.setAttribute('src',src)
            img.style.opacity = '1'
        }
    }
}
</script>

<style>

</style>