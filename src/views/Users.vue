<template>
  <div class="h-screen bg-primary flex">
        <NavbarDashboard />
        <Icon icon="fontisto:nav-icon-a" class="text-2xl lg:hidden absolute top-3 left-3 z-10" @click="clickNav" v-show="navActive"/>
        <NavMobile :isMobile="isMobile" :navActive="navActive" @clickClose="clickClose"/>

        <div class="w-full flex flex-col items-center relative">
            <div class="w-3/4 flex lg:flex-row flex-col items-center mt-20 gap-5">
                <InputButton icon="akar-icons:search" class="w-full h-10 lg:w-3/4 lg:order-1 order-2" @inputSearch="onSearch"/>
                <router-link to="/users/add" class="lg:w-1/4 w-full lg:order-2 order-1">
                    <Button nama="Tambah Karyawan" class="bg-blue-500 text-white w-full"/>
                </router-link>
            </div>
            <TableUsers class="lg:w-3/4 w-[90%] mt-10" @clickUser="clickUser" :users="users"/>
        </div> 
    </div>
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue'
import TableUsers from '@/components/TableUsers.vue'
import InputButton from '@/components/InputButton.vue'
import Button from '@/components/Button.vue'
import NavMobile from '@/components/navMobile.vue'

export default {
    data(){
        return{
            users : [],
            data:[],
            isMobile:false,
            navActive : true
        }
    },
    components:{
        NavbarDashboard,TableUsers,InputButton,Button,NavMobile
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
        clickUser(){
            this.$router.push('/edit/profile')
        },
        onSearch(val){
            const userFind = []
            this.data.forEach(user => {
                if (user.nama.startsWith(val)){
                    userFind.push(user)
                }
            });
            this.users = userFind
        }
    },
    created(){
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(users => {
            this.data = users
            this.users = users
        })
    }
}
</script>

<style>

</style>