<script>
import {store} from '../store'

export default {
  data() {
    return {
      store,
    }
  },

  methods: {
    fixedLang(movieLang){
      if (movieLang == 'en'){
        movieLang = 'GB'
      } else if (movieLang == 'ja'){
        movieLang = 'JP'
      } else{
        movieLang = movieLang
      }
      return movieLang;
    }
  }

}

</script>

<template>

  <div class="m-5">

    <ul v-for="movie in store.foundMovies">
      <li>{{ movie.title }}</li>
      <li>{{ movie.original_title }}</li>
      <li><img :src="store.flag.uri + fixedLang(movie.original_language).toUpperCase() + store.flag.style" alt=""></li>
      <li>{{ movie.vote_average }}</li>
    </ul>

    <ul v-for="serie in store.foundSeries">
      <li>{{ serie.name }}</li>
      <li>{{ serie.original_name }}</li>
      <li><img :src="store.flag.uri + fixedLang(serie.original_language).toUpperCase() + store.flag.style" alt=""></li>
      <li>{{ serie.vote_average }}</li>
    </ul>

  </div>

</template>

<style lang="scss" scoped></style>
