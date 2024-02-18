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
        titleSerie: String,
        originalTitleSerie: String,
        posterSerie: String,
        languageSerie: String,
        voteSerie: Number
    }
}

</script>

<template>

    <div class="card">

        <div class="poster">
            <img :src="store.api.posterUri + store.api.posterSize + posterSerie" alt="">
            <div class="info-card">

                <div class="title">

                    <h1> {{ titleSerie }}</h1>

                    <h2>{{ originalTitleSerie }}</h2>

                </div>

                <div class="language">
                    <img :src="store.flag.uri + languageSerie + store.flag.style" alt="">
                </div>

                <div class="vote">
                    <font-awesome-icon v-for="star in 5"
                        :icon="(star <= voteSerie) ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
                </div>

            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped></style>