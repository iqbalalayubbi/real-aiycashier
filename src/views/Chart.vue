<template>
   <div class="h-screen bg-primary flex">
        <NavbarDashboard />
        <Icon icon="fontisto:nav-icon-a" class="text-2xl lg:hidden absolute top-3 left-3 z-10" @click="clickNav" v-show="navActive"/>
        <NavMobile :isMobile="isMobile" :navActive="navActive" @clickClose="clickClose"/>
        
        <div class="w-full flex flex-col items-center relative">
            <div class="lg:w-3/4 w-[95%] h-[70%] mt-20 bg-white p-5 rounded-md flex flex-col items-center">
                <Button :nama="type" class="bg-third px-5 text-white w-40 self-start" @click="changeType"/>
                <div class="lg:w-3/4 h-full">
                    <canvas :v-show="isActive" id="myChart" class="h-[65%] mt-8"></canvas>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue'
import Button from '@/components/Button.vue'
import Chart from 'chart.js/auto'
import method from '../utils/chart'
import NavMobile from '@/components/navMobile.vue'

export default {
    data(){
        return{
            type:'bar',
            isActive : true,
            isMobile:false,
            navActive : true
        }
    },
    components:{
        NavbarDashboard,Button,NavMobile
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
        changeBar(){
            Chart.getChart('myChart').destroy();
            const ctx = document.getElementById('myChart');
            const myChart = new Chart(ctx,method.showChart('bar',[10,20,30])) 
            myChart
            this.type = 'bar'
        },
        changeLine(){
            Chart.getChart('myChart').destroy();
            const ctx = document.getElementById('myChart');
            const myChart = new Chart(ctx,method.lineChart(['1000000', '59000', '80000', '81000', '560000', '550000', '400000'])) 
            myChart
            this.type = 'line'
        },
        changeType(){
            if (this.type == 'line') this.changeBar()
            else this.changeLine()
        }
    },
    mounted(){
        const ctx = document.getElementById('myChart');
        const myChart = new Chart(ctx,method.showChart('bar',[10,20,30])) 
        myChart
        this.type = 'bar'
    }
}
</script>

<style>

</style>