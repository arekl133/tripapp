<template>
  <q-page class="q-pa-sm">
    <q-card class="my-card" v-if="place" flat bordered>
      <img :alt="place.name" :src="place.url">
      <q-card-section>
        <div class="text-h6">{{ place.name }}</div>
        <div class="text-subtitle2">
          <p v-if="place.costToVisit"><strong>Koszt wizyty: </strong>{{place.costToVisit}} zł</p>
          <p v-else>Darmowy wstęp!</p></div>
      </q-card-section>
      <q-card-section>
        <p><strong>Opis: </strong>{{place.description}}</p>
        <p><strong>Pozycja: </strong>{{geoPosition}}</p>
      </q-card-section>
      <q-card-actions>
        <q-btn @click="showWeather" flat>Pogoda</q-btn>
        <q-btn @click="goToComments" flat>Komentarze</q-btn>
      </q-card-actions>
    </q-card>
    <div v-else>Brak miejsca w bazie</div>
  </q-page>
</template>

<script>
//import placeService from "@/services/placeService";
import axios from 'axios'
export default {
  name: "Place",
  props: {
  
  id: {type:String}
    
  },
  emits: ['add-comment'],
  data() {
    return {
      place: {
    
      }
    }
  },
  computed: {
    geoPosition() {
      return this.place.lat + ', ' + this.place.lon
    }
  },
  mounted(){
    this.getPlace(this.id)
  },
  methods: {
    goToComments() {
      this.$router.push('/places/' + this.id + '/comments')
    },
    getPlace(id) {
     axios.get('/api/places/' + id)
    .then((resp)=>{
      this.place = resp.data;
      console.log(this.place)
    })
       
      
    },
    showWeather() {
      alert("Słonecznie")
    }
  }
}
</script>

<style scoped>
.my-card{
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>