<template>
  <div>
    <table class="w-full">
        <thead class="bg-third text-white sticky top-0">
            <th class="py-3 hidden lg:inline-block">No</th>
            <th class="py-3">Nama Barang</th>
            <th class="py-3 hidden lg:inline-block">kategori</th>
            <th class="py-3 hidden lg:inline-block">Satuan</th>
            <th>Modal</th>
            <th>Harga</th>
            <th>Stok</th>
        </thead>
        <tbody>
            <tr @click="this.$router.push('/item/edit')" class="hover:bg-green-200 hover:cursor-pointer" v-for="(item,i) in items" :key="i" :class="[i % 2 == 0 ? 'bg-gray-300' : 'bg-gray-200']">
                <td class="py-3 hidden lg:inline-block">{{i+1}}</td>
                <td class="py-3">{{item.nama}}</td>
                <td class="py-3 hidden lg:inline-block">{{item.kategori}}</td>
                <td class="py-3 hidden lg:inline-block">{{item.satuan}}</td>
                <td>{{item.modal}}</td>
                <td>{{item.harga}}</td>
                <td><span class="bg-green-500 py-1 px-2 text-white rounded-md">{{item.stok}}</span> </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props:{
    items:Object
  }
}
</script>

<style>

</style>