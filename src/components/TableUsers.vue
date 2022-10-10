<template>
  <div>
    <table class="w-full">
        <thead class="bg-third text-white">
            <th class="py-2 lg:block hidden">No</th>
            <th class="py-2">Username</th>
            <th class="hidden lg:inline-block">Nama</th>
            <th class="lg:block hidden">No Hp</th>
            <th>Role</th>
        </thead>
        <tbody>
            <tr class="hover:bg-green-200 hover:cursor-pointer" v-for="(user,i) in users" :key="i" :class="[i % 2 == 0 ? 'bg-gray-300' : 'bg-gray-200']" @click="clickUser">
                <td class="py-2 lg:block hidden">{{i+1}}</td>
                <td class="flex justify-center items-center h-16 py-2">
                    <div class="flex items-center justify-between gap-5 h-full w-1/2">
                        <img src="../assets/users/user1.svg" alt="" width="40">
                        <span>{{user.username}}</span>
                    </div>
                </td>
                <td class="hidden lg:inline-block">{{user.nama}}</td>
                <td class="lg:block hidden">{{user.no_hp}}</td>
                <td><span class="bg-blue-600 text-white py-2 px-3 rounded-md">{{user.role}}</span></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    props:{
        users: Object
    },
    methods:{
        clickUser(){
            this.$emit('clickUser','')
        }
    },
    created(){
        console.log(this.users)
    }
}
</script>

<style>

</style>