<template>
  <div>
    <table class="w-full">
        <thead class="bg-third text-white sticky top-0">
            <th class="py-3">No</th>
            <th>Nama</th>
            <th>Kategori</th>
            <th>Satuan</th>
            <th>Harga</th>
        </thead>
        <tbody>
            <tr v-for="(item,i) in items" :key="i" :class="[i % 2 == 0 ? 'bg-gray-300' : 'bg-gray-200']" class="hover:bg-green-300 hover:cursor-pointer" @click="clickItem(item)">
                <td class="py-3">{{i+1}}</td>
                <td>{{item.nama}}</td>
                <td>{{item.kategori}}</td>
                <td>{{item.satuan}}</td>
                <td>{{item.harga}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    props:{
        items:Object
    },
    methods:{
        clickItem(item){
            this.$emit('clickItem',item)
        }
    }
}
</script>

<style>

</style>