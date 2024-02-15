<script>
import {store} from '../store'

export default {
  data() {
    return {
      store,
    }
  }
}

</script>

<template>

  <div class="m-5">
    <ul v-for="movie in store.foundMovies">
      <li>{{ movie.title }}</li>
      <li>{{ movie.original_title }}</li>
      <li>{{ movie.original_language }}</li>
      <li>{{ movie.vote_average }}</li>

    </ul>

  </div>

</template>

<style lang="scss" scoped></style>
