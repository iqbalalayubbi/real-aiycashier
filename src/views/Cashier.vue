<template>
    <div class="h-screen bg-primary flex">
        <Navbar />
        <Icon icon="fontisto:nav-icon-a" class="text-2xl lg:hidden absolute top-3 left-3 z-10" @click="clickNav" v-show="navActive"/>
        <NavMobile :isMobile="isMobile" :navActive="navActive" @clickClose="clickClose"/>

        <div class="w-full flex flex-col items-center relative">
            <div class="bg-white w-3/4 h-20 lg:h-32 mt-12 flex items-center justify-end rounded-xl">
                <h1 class="lg:text-4xl text-xl mr-10">Rp{{total}}</h1>
            </div>
            <div class="flex justify-center gap-5 mt-8 w-full">
                <InputButton icon="akar-icons:search" parentClass="lg:w-[40%] w-3/4 h-10" @clickSearch="clickSearch"/>
            </div>
            <div class="w-full flex justify-center mt-8">
                <TableCashier parentEl="lg:h-[18rem] h-60" :items="items" @getTotal="getTotal" ref="table"/>
            </div>
            <div class="w-full mt-5">
                <Button nama="Bayar" class="bg-third w-[60%] text-white" @click="isChoose = true"/>
            </div>

            <!-- choose item -->
            <popupItems :items="itemsDb" v-show="isActive" class="absolute w-[80%] left-50 top-40 overflow-auto h-80 rounded-lg z-10" @clickItem="clickItem"/>
            
            <!-- choose method -->
            <popupPay v-show="isChoose" class="lg:w-1/2 w-[90%] h-[80%] lg:h-[70%] bg-gray-200 absolute left-50 top-20 lg:top-32 rounded-lg border-4 border-gray-500 z-10" @selectPay="selectPay"/>

            
            <!-- payment -->
            <Payment v-show="isPay" :src="src" @clickBayar="clickBayar" :isCash="isCash" :total="total" class="absolute w-[90%] lg:w-[50%] left-50 top-32 lg:top-40 overflow-auto h-80 border-2 border-gray-500 rounded-lg z-10"/>


            <!-- bg black -->
            <div v-show="isActive" class="absolute bg-black opacity-60 w-full h-full z-0" @click="onCancel">
            </div>

            <div v-show="isChoose" class="absolute bg-black opacity-60 w-full h-full z-0" @click="isChoose = false">
            </div>

            <div v-show="isPay" class="absolute bg-black opacity-60 w-full h-full z-0" @click="isPay = false">
            </div>
         
        </div> 

    </div>
</template>

<script>
import Navbar from '@/components/NavbarDashboard.vue'
import InputButton from '@/components/InputButton.vue'
import TableCashier from '@/components/TableCashier.vue'
import Button from '@/components/Button.vue'
import popupItems from '@/components/popupItems.vue'
import popupPay from '@/components/popupPay.vue'
import Payment from '@/components/Payment.vue'
import gopay from '@/assets/beranda/bank/gopay.svg'
import bri from '@/assets/beranda/bank/bri.svg'
import bni from '@/assets/beranda/bank/bni.svg'
import mandiri from '@/assets/beranda/bank/mandiri.svg'
import NavMobile from '@/components/navMobile.vue'

export default {
    data(){
        return{
            isActive : false,
            isChoose : false,
            isPay : false,
            image:{
                bri ,
                bni ,
                mandiri ,
                gopay 
            },
            src:'',
            isCash:false,
            items : [],
            total:'0',
            allId:[],
            itemsDb:[],
            data:[],
            isMobile:false,
            navActive : true
        }
    },
    components:{
        Navbar, InputButton, TableCashier,Button,popupItems,popupPay,Payment,NavMobile
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
        clickSearch(val){
            const itemsFind = [];
            this.data.forEach(item => {
                if(item.nama.startsWith(val)){
                    itemsFind.push(item)
                }
            }) 
            if (itemsFind.length == 0){
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Barang tidak ditemukan!',
                })
            }else{
                this.itemsDb = itemsFind
                this.isActive = true
            }
        },
        clickItem(item){
            const idSelected = item.id
            if (this.allId.indexOf(idSelected) == -1){
                this.allId.push(idSelected)
                this.items.push(item)
            }else{
                const items = this.$refs.table.$refs.items
                items.forEach(item => {
                    const children = item.children
                    const id = item.getAttribute('data-id')
                    if(id == idSelected){
                        console.log('ok')
                        const harga = parseInt(children[2].innerHTML)
                        const amount = children[3].firstElementChild
                        amount.value = parseInt(amount.value)+1
                        children[4].innerHTML = harga*amount.value
                    }
                })
                const total = this.$refs.table.$refs.total
                let val = 0
                    total.forEach(item => {
                    val += parseInt(item.innerHTML)
                })
                this.total = val
            }
            this.isActive = false
        },
        onCancel(){
            this.isActive = false
        },
        selectPay(method){
            method == 'cash' ? this.isCash = true : this.isCash = false
            this.src = this.image[method]
            this.isChoose = false
            this.isPay = true
        },
        clickBayar(){
            this.$swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Berhasil dibayar',
                showConfirmButton: false,
                timer: 1000
            }).then(res => {
                this.isPay = false
                this.items = []
            }) 
        },
        getTotal(total){
            this.total = total
        }
    },
    created(){
        fetch('http://localhost:3000/items')
        .then(res => res.json())
        .then(itemsDb => {
            this.data = itemsDb
            this.itemsDb = itemsDb
        })
    },
    updated(){
        console.log(this.isMobile)
    }
}

</script>

<style>

</style>