<script>
import axios from 'axios';
import { store } from '../store';
export default {
    data() {
        return {
            store,

        }
    },

    
}
</script>

<template>
    <div class="m-5">

        <input type="text" v-model="store.api.query" @keyup.enter="$emit('search')">
        <button class="btn btn-primary mx-3" @click="$emit('search')">cerca</button>

    </div>
</template>

<style lang="scss" scoped></style>