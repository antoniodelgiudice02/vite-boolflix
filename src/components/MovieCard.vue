<script>
import { store } from '../store'

export default {
    data() {
        return {
            store,
            defaultLang: '?'
        }
    },

    props: {
        titleMovie: String,
        originalTitleMovie: String,
        posterMovie: String,
        languageMovie: String,
        voteMovie: Number
    }
}

</script>

<template>
    <div class="card">

        <div class="poster">
            <img :src="store.api.posterUri + store.api.posterSize + posterMovie" alt="">
            <div class="info-card">
                <div class="title">

                    <h1> {{ titleMovie }}</h1>
                    <h2>{{ originalTitleMovie }}</h2>

                </div>

                <div class="language">
                    <img :src="store.flag.uri + languageMovie + store.flag.style" alt="">
                </div>

                <div class="vote">
                    <font-awesome-icon v-for="star in 5"
                        :icon="(star <= voteMovie) ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
                </div>
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
</style>