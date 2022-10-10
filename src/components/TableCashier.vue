<template>
  <div class="lg:w-[60%] w-[90%] overflow-auto" :class="parentEl">
    <table class="w-full text-center">
        <thead class="bg-third text-white sticky top-0">
            <th class="py-2 hidden lg:block">No</th>
            <th class="py-2">Nama</th>
            <th>Harga</th>
            <th>Jumlah</th>
            <th>Total</th>
        </thead>
        <tbody >
            <tr v-for="(item,i) in items" :key="i" :class="[i % 2 == 0 ? 'bg-gray-300 hover:bg-green-300 hover:cursor-pointer' : 'bg-gray-200 hover:bg-green-300 hover:cursor-pointer']" ref="items" :data-id="item.id">
                <td class="py-2 hidden lg:block">{{i+1}}</td>
                <td class="py-2">{{item.nama}}</td>
                <td ref="price">{{item.harga}}</td>
                <td>
                    <input type="text" class="w-10 bg-transparent focus:outline-none border-2 border-white text-center bg-blue-200" value="1" @input="changeAmount"/>
                </td>
                <td ref="total"></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>

export default {
    data(){
        return{
            selectId:[]
        }
    },
    props:{
        parentEl:String,
        items:Object
    },
    methods:{
        changeAmount(e){
            this.calculateItem()
            this.calculateTotal()
        },
        getAllItems(){
            return this.$refs.items
        },
        calculateItem(){
            const items = this.$refs.items
            items.forEach(item => {
                const children = item.children
                const id = item.getAttribute('data-id') 
                if (this.selectId.indexOf(id) == -1){
                    this.selectId.push(id)
                }
                const harga = parseInt(children[2].innerHTML)
                const amount = parseInt(children[3].firstElementChild.value)
                children[4].innerHTML = harga*amount
            })
        },
        calculateTotal(){
            const total = this.$refs.total
            let val = 0
            total.forEach(item => {
                // console.log(item.innerHTML)
                val += parseInt(item.innerHTML)
            })
            console.log(val)
            this.$emit('getTotal',val)
        }
    },
    updated(){
        this.calculateItem()
        this.calculateTotal()
    },
}
</script>

<style>

</style>