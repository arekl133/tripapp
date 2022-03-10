<template>
  <Main/>
</template>

<script>
import axios from 'axios'
import Main from './views/Main'

export default {
  components: {
    Main,
  },
  data () {
    return {}
  },
  //mounted uruchamia sie po wejsciu w komponent
   async created() {
     const res =  await axios.get('api/users', {
       headers: {
         Authorization: 'Bearer' + localStorage.getItem('token')
       }
     });
     console.log(res)
    //   const user = res.data
    //   if(user.error === true) {
    //     await this.$router.push('/login')
    //  }
   }
}

</script>
<style scoped>
  
</style>
