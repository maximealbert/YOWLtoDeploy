<template>

</template>

<script>
export default {
  name: "menu",
  data() {
    return {
      showMenu: false
    }
  },
  methods:{
    changeState(){
      if (this.showMenu===true)
        this.showMenu=false
      else if(this.showMenu===false)
        this.showMenu=true
    }
  }}






</script>

<style scoped>

</style>