<template>
  <nav class="h-screen w-20 hover:w-40 hover:items-start transition-all duration-300 bg-second hidden lg:flex flex-col items-center gap-10" @mousemove="navActive = true" @mouseleave="navActive = false">
    <router-link to="/profile" class="w-full">
      <div class="w-full flex justify-center">
        <img src="../assets/beranda/profile.svg" alt="" class="transition-all duration-300">
      </div>
    </router-link>
    <div class=" flex flex-col justify-center gap-8" >

        <router-link to="/dashboard" >
          <div class="flex gap-3 text-white hover:opacity-100" :class="[menuActive == 'dashboard' ? ' opacity-100' : ' opacity-50']">
            <Icon icon="ant-design:home-filled" class=" text-xl hover:opacity-100"  @click="toggleMenu"/>
            <h1 v-show="navActive" class=" hover:opacity-100">Dashboard</h1>
          </div>
        </router-link>

        <router-link to="/cashier" class="flex gap-5">
        <div class="flex gap-3 text-white hover:opacity-100" :class="[menuActive == 'cashier' ? ' opacity-100' : ' opacity-50']">
          <Icon icon="fa6-solid:cash-register" class="text-xl hover:opacity-100" @click="toggleMenu"/>
          <h1 v-show="navActive" class="hover:opacity-100">Cashier</h1>
        </div>
        </router-link>
        
        <router-link to="/users" class="flex gap-5">
        <div class="flex gap-3 text-white hover:opacity-100" :class="[menuActive == 'users' ? ' opacity-100' : ' opacity-50']">
          <Icon icon="icomoon-free:profile" class="text-xl hover:opacity-100" @click="toggleMenu"/>
          <h1 v-show="navActive" class="hover:opacity-100">Users</h1>
        </div>
        </router-link>

        <router-link to="/items" class="flex gap-5">
        <div class="flex gap-3 text-white hover:opacity-100" :class="[menuActive == 'items' ? ' opacity-100' : ' opacity-50']">
          <Icon icon="bi:box-fill" class="text-xl hover:opacity-100" @click="toggleMenu"/>
          <h1 v-show="navActive" class="hover:opacity-100">Items</h1>
        </div>
        </router-link>

        <router-link to="/chart" class="flex gap-5">
        <div class="flex gap-3 text-white hover:opacity-100" :class="[menuActive == 'chart' ? ' opacity-100' : ' opacity-50']">
          <Icon icon="bi:bar-chart-line-fill" class="text-xl hover:opacity-100" @click="toggleMenu"/>
          <h1 v-show="navActive" class="hover:opacity-100">Chart</h1>
        </div>
        </router-link>

        <router-link to="/shop" class="flex gap-5">
        <div class="flex gap-3 text-white hover:opacity-100" :class="[menuActive == 'shop' ? ' opacity-100' : ' opacity-50']">
          <Icon icon="entypo:shop" class="text-xl hover:opacity-100" @click="toggleMenu"/>
          <h1 v-show="navActive" class="hover:opacity-100">Shop</h1>
        </div>
        </router-link>

    </div>

    <router-link to="/login" class="flex gap-5">
      <div class="flex gap-3 opacity-50 hover:opacity-100 text-red-600 absolute bottom-16 left-6" @click="onLogout">
        <Icon icon="heroicons-outline:logout" class="text-xl rotate-180" @click="toggleMenu"/>
        <h1 v-show="navActive">Logout</h1>
      </div>
    </router-link>

  </nav>
</template>

<script>
export default {
  data(){
    return{
      menuActive:'',
      navActive:false
    }
  },
  methods:{
    toggleMenu(){this.menuActive = this.$route.path.split('/')[1]},
    onLogout(){this.$router.push('/login')}
  },
  created(){
    this.menuActive = this.$route.path.split('/')[1]
  }
}
</script>