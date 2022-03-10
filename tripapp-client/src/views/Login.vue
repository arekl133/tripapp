<template>
<h3> Witaj w Trip-App</h3>
<div class="container">
  <div class="login">
    <form>
       <p>Welcome back</p>
       <h6 v-if="message">{{message}}</h6>
       <input v-model="email" placeholder="Emai Address">
       <input v-model="password" placeholder="Password">
       <input class="button" type="submit" value="Zaloguj" @click="login()">
       <a class="buttonRegister" href="#/register" >Register</a>
    </form>
  </div>
  <div class="forMe">
    <img src="../assets/images/haker.jpg" alt="" >
    <div class="overlay">
      <h3>Arkadiusz Lewiński</h3>
      <h4>Vue.js Developer</h4>
      
    </div>
    
  </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      password: '',
      message: '',
    }
  },
  methods: {
    async login(){
      //try{
      
      const res = await axios.post('api/users/login', {
        email: this.email,
        password: this.password,
        message: this.message
      })
      localStorage.setItem('token', res.data.token)
      if (res.status === 401) {
         this.message = "Nieprawidłowe dane logowania"
       } else if (res.status === 200) {
         this.$store.commit('authenticate', res.data)
          this.$router.push('/')
     
     
    }
    },
    
  },
}
    // login: async ()=> {
    //   const res = await axios.post('/api/login', {
    //     username: this.username,
    //     password: this.password,
    //   }, { validateStatus: false })

    //   if (res.status === 401) {
    //     this.message = "Nieprawidłowe dane logowania"
    //   } else if (res.status === 200) {
    //     this.$store.commit('authenticate', res.data)
    //     await this.$router.push('/')
    //   }
    // },
  

</script>
<style scoped>
h3{
  text-align:center;
  margin: 20px;
  font-size: 2.9rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  text-shadow: 0px -3px 7px rgb(49, 69, 89);
  
}
h6{
  color: red;
  margin: 0;
}
.container{
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color:rgb(123, 147, 170) ;

}

.forMe{
    width: 350px;
    height: 400px;
    border: 2px solid black;
    position: relative;
}


.forMe img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #1f6b1c9d;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
  color: white;
}

.forMe:hover .overlay {
  height: 100%;
}

.text {
  white-space: nowrap; 
  color: white;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}


.login{
    width: 350px;
    height: 400px;
    border: 2px solid black;

}
.login form{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  
  }
.login form p{
  font-size: 1.5rem;
  font-family: monospace;
  opacity: .4;
  
}
.login form input{
  width: 90%;
  font-size: 1.2rem;
  padding: 10px;
   text-decoration: none;
   font-family:cursive;
}

.button {
  background-color: rgb(49, 69, 89);
  border: none;
  font-size: 28px;
  color: #FFFFFF;
  width: 100%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: .2s;
}
.button:hover{
  background-color: rgb(55, 66, 78);
}


</style>