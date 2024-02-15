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
      <li><img :src="store.flag.uri + this.fixedLang(movie.original_language).toUpperCase() + store.flag.style" alt=""></li>
      <li>{{ movie.vote_average }}</li>

    </ul>

  </div>

</template>

<style lang="scss" scoped></style>
