import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGQyZGU0NjRlMzRmYTQzYTVhNmZmMjY4ZDNkYzAzZiIsInN1YiI6IjYxMmZiMWRhY2ZmZWVkMDAyMDJiMjc3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aofrMxK6HHDdpeGpqYRa0IVYpYTW_pkoaQS1OkttPeI'
    }
});

const discoverMovie = async () => await instance.get('/discover/movie');
const discoverMoviePage = async (pageNumber) => await instance.get('/discover/movie?page=' + pageNumber);
const discoverGenre = async () => await instance.get('/genre/movie/list');
const getPopularMovie = async () => await instance.get('/movie/popular');
const getDetailsMovie = async (id) => await instance.get('/movie/' + id);
const getTopMovies = async () => await instance.get('/movie/top_rated');
const getLatestMovie = async () => await instance.get('/movie/upcoming');
const getImagesMovie = async (movie_id) => await instance.get('/movie/' + movie_id + '/images');
const getKeywordsMovie = async (movie_id) => await instance('/movie/' + movie_id + '/keywords')


export {discoverMovie, discoverGenre, getDetailsMovie, getPopularMovie, getTopMovies, getLatestMovie, getImagesMovie, discoverMoviePage, getKeywordsMovie};