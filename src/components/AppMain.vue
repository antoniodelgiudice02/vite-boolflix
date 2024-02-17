<script>
import { store } from '../store'
import MovieCard from './MovieCard.vue'
import SerieCard from './SerieCard.vue'

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
    },

    // defaultPoster(poster){
    //   if(poster === null){

    //   }
    // }
  },

  components: { MovieCard, SerieCard }

}

</script>

<template>
  <main class="m-5">

    <movie-card v-for="movie in store.foundMovies"
    :titleMovie="movie.title"
    :originalTitleMovie="movie.originalTitle"
    :posterMovie="movie.poster"
    :languageMovie="fixedLang(movie.language).toUpperCase()"
    :voteMovie="everageVote(movie.vote)"
    ></movie-card>

    <serie-card v-for="serie in store.foundSeries"
    :titleSerie="serie.title"
    :originalTitleSerie="serie.originalTitle"
    :posterSerie="serie.poster"
    :languageSerie="fixedLang(serie.language).toUpperCase()"
    :voteSerie="everageVote(serie.vote)"
    ></serie-card>

  </main>
</template>

<style lang="scss" scoped>

  main{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
