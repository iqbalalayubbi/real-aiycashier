<template>
  <div class="flex flex-col items-start w-full gap-2">
    <label for="">{{nama}}</label>
    <input :type="type" class="h-8 rounded-md indent-3 w-full focus:outline-none" :class="inputClass" :placeholder="placeholder" @focus="onFocus">
  </div>
</template>

<script>
export default {
  props:{
    type: String,
    nama: String,
    inputClass : String,
    placeholder : String
  },
  methods:{
    onFocus(){
      this.$emit('onFocus')
    }
  }
}
</script>
    
<style>

</style>