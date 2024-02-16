<script>
import { store } from '../store'

export default {
  data() {
    return {
      store,
    }
  },

  methods: {
    fixedLang(movieLang) {
      if (movieLang == 'en') {
        movieLang = 'GB'
      } else if (movieLang == 'ja') {
        movieLang = 'JP'
      } else {
        movieLang = movieLang
      }
      return movieLang;
    },

    everageVote(vote) {
      
      return Math.floor(vote / 2)
    }
  }

}

</script>

<template>
  <div class="m-5">

    <ul v-for="movie in store.foundMovies">
      <li>{{ movie.title }}</li>
      <li>{{ movie.originalTitle }}</li>
      <li><img :src="store.api.posterUri + store.api.posterSize + movie.poster" alt=""></li>
      <li><img :src="store.flag.uri + fixedLang(movie.language).toUpperCase() + store.flag.style" alt=""></li>
      <li>{{ everageVote(movie.vote) }}</li>
    </ul>

    <ul v-for="serie in store.foundSeries">
      <li>{{ serie.title }}</li>
      <li>{{ serie.originalTitle }}</li>
      <li><img :src="store.api.posterUri + store.api.posterSize + serie.poster" alt=""></li>
      <li><img :src="store.flag.uri + fixedLang(serie.language).toUpperCase() + store.flag.style" alt=""></li>
      <li>{{ everageVote(serie.vote) }}</li>
    </ul>

  </div>
</template>

<style lang="scss" scoped></style>
