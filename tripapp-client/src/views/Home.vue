<template>
<header>
  <Slider />
  <CardPlace />
  
</header>
  
</template>

<script>

import Slider from './Slider.vue'
import CardPlace from './CardPlace.vue'

export default {

  components: {
    Slider,
    CardPlace
  },
  name: "Home",
  data(){
    return{
     
    }
  }
}
</script>

<style scoped>
header{
  width: 100%;
  height: 100%;
  
}
</style>