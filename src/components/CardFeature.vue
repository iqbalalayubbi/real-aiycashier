<template>
    <div class="flex flex-col items-center bg-white w-full lg:w-1/4 rounded-xl h-52 lg:h-full">
        <h1 class="text-2xl font-bold mt-3 lg:mt-10 w-3/4">{{title}}</h1>
        <span class="w-[90%] mt-3 lg:mt-10">{{value}}</span>
    </div>
</template>

<script>
export default {
    props:{
        title : String,
        value : String
    }
}
</script>

<style>

</style>