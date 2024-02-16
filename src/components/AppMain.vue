<script>
import { store } from '../store'

export default {
  data() {
    return {
      store,
      starSolid: 'fa-solid fa-star',
      starRegular: 'fa-regular fa-star',
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
      <li>{{ everageVote(movie.vote) }}
        <font-awesome-icon v-for="star in 5" :icon="(star <= everageVote(movie.vote)) ? starSolid : starRegular"/>
      </li>
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
