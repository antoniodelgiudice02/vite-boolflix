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
    <header>

        <div class="logo">
            <span>BOOLFLIX</span>
        </div>

        <div class="searchbar d-flex">


            <input type="text" class="form-control my-input" placeholder="Titoli" v-model="store.api.query"
                @keyup.enter="$emit('search')">
            <btn class="btn btn-light my-btn" @click="$emit('search')"><span>cerca</span></btn>

        </div>

    </header>
</template>

<style lang="scss" scoped>
header {
    height: 70px;
    background-color: black;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        color: red;
        font-size: 2rem;
    }

    .searchbar {

        .my-input,
        .my-btn {
            height: 30px;
            border-radius: 0;
            padding: 0 10px;

            .span {}
        }
    }


}
</style>