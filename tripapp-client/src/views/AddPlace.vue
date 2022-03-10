<template>
  <section class="addSection">
    <form>
        <h5>Dodaj miejsce Wycieczki</h5>
        <div class="box">
          <input v-model="name" label="Nazwa Miejsca" placeholder="Nazwa Miejsca">
          <input v-model="url" label="Link do zdjecia" placeholder="Link do zdjecia">
        </div>
          <textarea v-model="description" label="Opis" placeholder="Opis"></textarea>
        <div class="box">
          <input v-model="city" label="Miasto" placeholder="Miasto">
          <input v-model="street" label="Ulica" placeholder="Ulica">
        </div>
        <div class="box">
          <input v-model="lat" label="lat" placeholder="lat">
          <input v-model="lon" label="lon" placeholder="lon">
        </div>
        <div class="box">
          <input v-model="costToVisit" label="Koszt wizyty" placeholder="Koszt wizyty">
          <input v-model="timeToVisit" label="Czas Wycieczki" placeholder="Czas Wycieczki">
        </div>
          <input class="button" type="submit" value="Zarejestruj Wycieczkę" @click="addedPlace()">
    </form>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      name:'',
      description:'',
      city:'',
      street:'',
      lat:'',
      lon:'',
      costToVisit:'',
      timeToVisit:'',
      url:'',
      message:'',
    }
  },
  methods: {
    async addedPlace() {
      const res = await axios.post('/api/places', {
        name: this.name,
        description: this.description,
        city: this.city,
        street: this.street,
        lat: this.lat,
        lon: this.lon,
        costToVisit: this.costToVisit,
        timeToVisit: this.timeToVisit,
        url: this.url
      })
      if (res.status === 201) {
        await this.$router.push('/');
      } else {
        this.message = res.data.message;
      }
    }

    }
  }

</script>

<style>
h3{
  margin: 0;
  padding: 5px;
}
.addSection{
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.addSection form{
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;   
  margin:20px auto;    
  border:2px solid #ccc; 
  padding:20px;
  margin-top: 90px;
}

.addSection form .box{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}
.addSection form textarea,form input{ 
  padding:5px;  
  border:1px solid #ccc;  
  margin-bottom:25px;  
  width:100%; 
  box-sizing: border-box;
}
</style>