<template>
<div class="container">
  <form  @submit.prevent="onSubmit(id)">
    <h3>Zostaw recenzję</h3>
    <div class="box">
      <input v-model="nick" placeholder="Nick">
    </div>
    <div class="box">
      <input v-model="title" placeholder="Tytuł">
    </div>
    <div class="box">
      <input v-model="content" placeholder="Recenzja">
    </div>
    <div class="box">
      <label>Ocena: </label>
      <select v-model.number="rate">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </div>
    <input class="button" type="submit" value="Dodaj komentarz">
  </form>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "CommentForm",
  emits: ['add-comment'],
  props: {
     id: {type: String}
  },
  data() {
    return {
      place:'',
      nick: '',
      title: '',
      content: '',
      rate: '',
     
      
    }
  },

  mounted(){
    this.getPlace(this.id)
  },


  methods: {

    getPlace() 
    {
      axios.get('/api/places/')
      .then((resp)=>{
      resp.data;
    })
    },
    onSubmit() 
    {
      const id = this.$route.params.id
      console.log(id)
      axios.post('api/comments/' + id,
    {
      nick: this.nick,
      title: this.title,
      content: this.content,
      rate: this.rate,
      place: id
    }
  
  )
  
    console.log("click");
    this.clearForm();
    }
    ,
    clearForm() {
      this.nick = null
      this.title  = null
      this.content  = null
      this.rate = null
    }
  }
}
</script>

<style scoped>
.container{
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:rgb(123, 147, 170) ;
}
.container form{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.container form h3{
  margin: 10px;
  width: 100%;
  text-align: center;
  font-family: fantasy;
  text-shadow: 0px -3px 7px rgb(49, 69, 89);
}
.container form .box{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container form .box input{
        width: 50%;
        font-size: 1.2rem;
        padding: 10px;
        text-decoration: none;
        font-family: cursive;
        border-radius: 5px;
        margin:10px;
        padding: 5px;
}
.button{
  background-color: rgb(49, 69, 89);
  border: none;
  font-size: 28px;
  color: #FFFFFF;
  width: 30%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  margin: 10px;
  transition: .3s;
}
.button:hover{
  background-color: rgb(55, 66, 78);
}
</style>