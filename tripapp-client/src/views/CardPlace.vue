<template>

<div class="title">
  <h3>Najczęsciej odwiedzane wycieczki</h3> 
</div>
<div class="search">
  
  <input type="text" v-model="search" placeholder="Wyszukiwanie po nazwie">
</div>

<div class="container">
  
  <div v-for="place in filterPlace" :key="place.id">
      <div class="card">
          <div class="card-header">
              <img  :src="place.url">
          </div>
          <div class="card-body">
              <h4>Zapraszamy</h4>
              <span class="tag"><p>{{place.name}}</p></span>
              <p>Cena: {{place.costToVisit}} zł</p>
          </div>
          
      </div>
  </div>
</div>  









</template>

<script>
import axios from 'axios';
export default {
name: "CardPlace",
data(){
    return{
      search: '',
      places: [],
    
    }
},
mounted(){ 
    {
    this.getPlaces()
    }
  },
methods: {
    getPlaces() {
     axios.get('api/places')
    .then((resp)=>{
      this.places = resp.data;
      console.log(this.places)
      console.log(resp.data + "CARD");
    })
}},
computed: {
filterPlace(){
  return this.places.filter(place => 
  place.name.toUpperCase().includes(this.search.toUpperCase()))
}
}
}

</script>

<style scoped>
.title{
  width: 100%;

  text-align: center;
  font-family: fantasy;
  text-shadow: 0px -3px 7px rgb(49, 69, 89);
}
.search{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #404348;
}
.search input{
  font-size: 1.4rem;
  border:5px solid #2a2e31;
  border-radius: 5px;
  background-color:#2d3035;
  color:#fffefe;
  box-sizing: border-box;
  background-image: url('../assets/images/pngegg.png');
  background-position: 15px 15px; 

  background-repeat: no-repeat;
  padding: 12px 20px 12px 60px;
  
}
.container {
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color:rgb(123, 147, 170) ;
}
.card {
  margin: 10px;
  background-color: #fff;
  border: 1px solid rgb(63, 66, 71);
  border-radius: 10px;
  box-shadow: 10px 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 350px;
  
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition-duration: 2s;
}

.card-header img:hover{
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    z-index: 0;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: rgba(186, 202, 184, 0.432);
}
.tag:hover{
    color:green;
}

</style>