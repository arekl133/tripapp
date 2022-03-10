<template>
<div class="container">
  
  <div class="rightBox">
    <form>
      <h5>Załóż konto</h5>      
      <h6 v-if="message">{{message}}</h6>
      <input v-model="username" label="Login" placeholder="Login">
      <input v-model="email" label="Email" placeholder="Email">
      <input v-model="password" label="Hasło" placeholder="Hasło">
      <input v-model="passwordConfirm" label="Hasło ponownie" placeholder="Repeat Password">
      <input class="button" type="submit" value="Zarejestruj" @click="register()">
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      message: '',
    }
  },
  methods: {
    async register() {
      const res = await axios.post('/api/users/singup', {
        username: this.username,
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm
      }, { validateStatus: false });

      if (res.status === 201) {
        await this.$router.push('/');
      } else {
        this.message = res.data.message;
      }
    }
  }
}
</script>
<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
  background-image: url("../assets/images/foto1.jpeg");
  background-color: #cccccc;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

  
  .rightBox{
    width: 50%;
    height: 100%;
    background-color: rgb(49, 69, 89, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rightBox form{
      width: 90%;
      height: 90%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
  }
  .rightBox form input{
        width: 90%;
        font-size: 1.3rem;
        padding: 5px;
        text-decoration: none;
        font-family: cursive;
        border-radius: 5px;
  }
  .rightBox form h3{
    margin: 0;

  }
  .rightBox form h6{
    color: red;
  }
  .rightBox form .button {
  background-color: rgb(49, 69, 89);
  border: none;
  font-size: 28px;
  color: #FFFFFF;
  width: 90%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
  
</style>
