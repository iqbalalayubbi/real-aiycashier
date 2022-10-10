<template>
  <div class="bg-white flex justify-between px-3 items-center rounded-md  relative" :class="parentClass">
    <input type="text" class="focus:outline-none w-[80%]" ref="input" @input="onInput">
    <div class="bg-third hover:opacity-80 hover:cursor-pointer text-white absolute rounded-r-md right-0 h-full w-16 flex justify-center items-center" @click="btnClick">
      <Icon :icon="icon"/>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    icon:String,
    parentClass:String
  },
  methods:{
    btnClick(){
      const input = this.$refs.input.value
      this.$emit('clickSearch',input)
    },
    onInput(e){
      this.$emit('inputSearch',e.target.value)
    }
  }
}
</script>

<style>

</style>