<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu"/>
        <q-toolbar-title>
          Wycieczki jednodniowe
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2">
      <q-list>
        <q-item-label header>Wazne linki</q-item-label>
        <q-item clickable :to="'/'">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>Strona domowa</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="'/places'">
          <q-item-section avatar>
            <q-icon name="apartment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Miejsca</q-item-label>
            <q-item-label caption>Ciekawe atrakcje</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="'/addplace'">
          <q-item-section avatar>
            <q-icon name="apartment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dodaj Wycieczke</q-item-label>
            <q-item-label caption>Wycieczki</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="page">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
<style scoped>
  .page{
    width: 100vw;
  }
  .glossy{
    background-color:rgb(123, 147, 170) ;
  }
</style>
