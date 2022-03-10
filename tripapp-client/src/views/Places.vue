<template>
  <q-page class="q-pa-sm">
    <q-table title="Lista atrakcji"
             :rows="places"
             :columns="columns"
             row-key="_id">
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <div>
            <q-btn color="primary" label="Pokaz" @click="goToPlace(props.row._id)" />
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
//import placeService from "@/services/placeService";
import axios from 'axios';

export default {
  name: "Places",
  data() {
    return {
      places: [],
      columns:[
        { name: 'name', label: 'Nazwa', field: 'name', align: 'left'},
        { name: 'costToVisit', label: 'Koszt wizyty', field: 'costToVisit', align: 'left'},
        { name: 'actions', align: 'right'}
      ]
    }
  },

  mounted(){ 
    {
    this.getPlaces()
    }
  },

  // created() {
  //   this.getPlaces()
  // },
  methods: {
    getPlaces() {
     axios.get('api/places')
    .then((resp)=>{
      this.places = resp.data;
      console.log(resp.data);
    })
    },
    goToPlace(id) {
      this.$router.push('/places/' + id)
    }
  }
}
</script>

<style scoped>

</style>