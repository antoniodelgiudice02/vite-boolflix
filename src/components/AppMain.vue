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
  <main>

    <div class="container">

      <div class="h1">Movies</div>
      <div class="card-container">

        <movie-card v-for="movie in store.foundMovies" :titleMovie="movie.title" :originalTitleMovie="movie.originalTitle"
          :posterMovie="movie.poster" :languageMovie="fixedLang(movie.language).toUpperCase()"
          :voteMovie="everageVote(movie.vote)"></movie-card>

      </div>

      <div class="h1">Series</div>

      <div class="card-container">

        <serie-card v-for="serie in store.foundSeries" :titleSerie="serie.title" :originalTitleSerie="serie.originalTitle"
          :posterSerie="serie.poster" :languageSerie="fixedLang(serie.language).toUpperCase()"
          :voteSerie="everageVote(serie.vote)"></serie-card>

      </div>

    </div>

  </main>
</template>

<style lang="scss" scoped>
main {

  background-color: rgb(50, 50, 50);

  .container {

    display: flex;
    justify-content: center;
    flex-direction: column;

    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .h1{
      color: white;
      font-weight: bold;
      font-size: 2rem;
    }
  }



}
</style>
