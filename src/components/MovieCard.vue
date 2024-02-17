<script>
import { store } from '../store'

export default {
    data() {
        return {
            store,
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
            <div>
                <img :src="store.api.posterUri + store.api.posterSize + posterMovie" alt="">
            </div>
        </div>

        <div class="title">

            <div>
                <span> {{ titleMovie }}</span>
            </div>

            <div>
                <span>{{ originalTitleMovie }}</span>
            </div>

        </div>

        <div class="language">
            <img :src="store.flag.uri + languageMovie + store.flag.style" alt="">
        </div>

        <div class="vote">
            <font-awesome-icon v-for="star in 5" :icon="(star <= voteMovie) ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
        </div>


    </div>
</template>

<style lang="scss" scoped></style>