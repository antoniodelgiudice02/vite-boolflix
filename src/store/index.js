import { reactive } from "vue";

export const store = reactive ({
    api: {
        uri: 'https://api.themoviedb.org/3/search/movie',
        key: '0202b8d2e8808e5698fe97bebe498b53',
    },

    foundMovies: [],

    flag: {
        uri: 'https://flagsapi.com/',
        style: '/flat/64.png'
    }
})