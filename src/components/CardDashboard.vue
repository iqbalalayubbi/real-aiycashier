<template>
    <div class="bg-third flex items-center justify-center gap-10 rounded-xl">
        <Icon :icon="icon" width="50" />
        <div class="flex flex-col items-start">
            <h1 class="text-2xl font-bold">{{nama}}</h1>
            <span class="text-xl">{{value}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        nama : String,
        value : String,
        icon:String
    }
}
</script>

<style>

</style>