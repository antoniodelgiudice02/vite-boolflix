import { reactive } from "vue";

export const store = reactive ({
    api: {
        moviesUri: 'https://api.themoviedb.org/3/search/movie',
        seriesUri: 'https://api.themoviedb.org/3/search/tv',
        key: '0202b8d2e8808e5698fe97bebe498b53',
        posterUri: 'https://image.tmdb.org/t/p/',
        posterSize: 'w185'
    },

    foundMovies: [],
    foundSeries: [],

    flag: {
        uri: 'https://flagsapi.com/',
        style: '/flat/64.png'
    }
})