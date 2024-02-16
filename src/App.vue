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

        const moviesArray = response.data.results

        store.foundMovies = moviesArray.map((movie) => {
          return {
            title: movie.title,
            originalTitle: movie.original_title,
            poster: movie.poster_path,
            language: movie.original_language,
            vote: movie.vote_average
          }
        })
        

      })
    },
    searchSerie() {
      axios.get(store.api.seriesUri, {
        params: {
          query: store.api.query,
          api_key: store.api.key
        }

      }).then((response) => {

        const seriesArray = response.data.results

        store.foundSeries = seriesArray.map((serie) => {
          return {
            title: serie.name,
            originalTitle: serie.original_name,
            poster: serie.poster_path,
            language: serie.original_language,
            vote: serie.vote_average
          }
        })
        
        console.log(store.foundSeries)
      })
    },

    fetch() {
      this.searchMovie(),
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
