<script>
import { store } from './store'
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'
import axios from 'axios'

export default {
  data() {
    return {
      store,

    }
      
  },

  methods: {
    searchMovie() {
      axios.get(store.api.uri, {
        params: {
          query: store.api.query,
          api_key: store.api.key
        }
        
      }).then((response) => {
        store.foundMovies = response.data.results
        console.log(response.data.results)
      })
    }
  },

  components: { AppMain, AppHeader }
}
</script>

<template>
  <app-header @search="searchMovie"></app-header>
  <app-main></app-main>
</template>

<style lang="scss">
@use './assets/style/genral.scss'
</style>
