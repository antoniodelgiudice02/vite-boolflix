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
      axios.get(store.api.moviesUri, {
        params: {
          query: store.api.query,
          api_key: store.api.key
        }

      }).then((response) => {
        store.foundMovies = response.data.results
        console.log(response.data.results)
      })
    },
    searchSerie() {
      axios.get(store.api.seriesUri, {
        params: {
          query: store.api.query,
          api_key: store.api.key
        }

      }).then((response) => {
        store.foundSeries = response.data.results
        console.log(response.data.results)
      })
    },

    fetch(){
      // this.searchMovie(),
      this.searchSerie()
    }
  },

  components: { AppMain, AppHeader }
}
</script>

<template>
  <app-header @search="fetch"></app-header>
  <app-main></app-main>
</template>

<style lang="scss">
@use './assets/style/genral.scss'
</style>
