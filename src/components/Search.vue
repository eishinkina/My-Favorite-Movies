<template>
  <div>
    <form @submit.prevent="searchstore.getMovies(searchMovie)">
      <input
        type="text"
        class="search-input"
        placeholder="поиск фильма..."
        v-model="searchMovie"
      />
    </form>
    <Loader v-if="searchstore.loader" />
    <div v-else>
      <Movie
        v-for="movie of searchstore.movies"
        :key="movie.id"
        :movie="movie"
        :is-search="true"
      />
    </div>
  </div>
</template>

<script setup>
import Loader from "../components/Loader.vue";
import { ref } from "vue";
import { useSearchStore } from '../stores/SearchStore';
const searchstore = useSearchStore();
const searchMovie = ref("");
import Movie from "../components/Movie.vue";
</script>

<style lang="scss" scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
