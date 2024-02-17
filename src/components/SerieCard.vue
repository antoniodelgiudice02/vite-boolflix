<script>
import { store } from '../store'

export default {
    data() {
        return {
            store,
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
            <div>
                <img :src="store.api.posterUri + store.api.posterSize + posterSerie" alt="">
            </div>
        </div>

        <div class="title">

            <div>
                <span> {{ titleSerie }}</span>
            </div>

            <div>
                <span>{{ originalTitleSerie }}</span>
            </div>

        </div>

        <div class="language">
            <img :src="store.flag.uri + languageSerie + store.flag.style" alt="">
        </div>

        <div class="vote">
            <font-awesome-icon v-for="star in 5" :icon="(star <= voteSerie) ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
        </div>


    </div>
</template>

<style lang="scss" scoped>


</style>