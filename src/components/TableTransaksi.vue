<template>
  <div class="overflow-auto">
    <table class="w-full text-center">
        <thead class="bg-third text-white sticky top-0">
            <th class="py-2 lg:block hidden">No</th>
            <th class="py-2">Tanggal</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Jumlah</th>
            <th>Total</th>
        </thead>
        <tbody>
            <tr v-for="(trans,i) in transaksi" :key="i" :class="[i % 2 == 0 ? 'bg-gray-300 hover:bg-green-300 hover:cursor-pointer' : 'bg-gray-200 hover:bg-green-300 hover:cursor-pointer']">
                <td class="py-2 lg:block hidden">{{i+1}}</td>
                <td class="py-2">{{trans.tanggal}}</td>
                <td >{{trans.nama}}</td>
                <td >{{trans.harga}}</td>
                <td>{{trans.jumlah}}</td>
                <td>{{trans.total}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    props:{
      transaksi:Object
    }
}
</script>

<style>

</style>