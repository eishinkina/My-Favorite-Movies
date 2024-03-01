import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const activeTab = ref(2);

  const moviesOnLocalStorage = localStorage.getItem("movies");
  if (moviesOnLocalStorage) {
    movies.value = JSON.parse(moviesOnLocalStorage);
    console.log(JSON.parse(moviesOnLocalStorage));
  }

  const setActiveTab = (id) => {
    activeTab.value = id;
  };

  const watchedMovies = computed(() => {
    return movies.value.filter((el) => el.isWatched === true);
  });

  const totalCountMovies = computed(() => {
    return movies.value.length;
  });

  const toggleWatched = (id) => {
    const idx = movies.value.findIndex((el) => el.id === id);
    movies.value[idx].isWatched = !movies.value[idx].isWatched;
  };

  const deleteMovie = (id) => {
    movies.value = movies.value.filter((el) => el.id !== id);
  };

  watch(
    () => movies.value,
    (newMovies) => {
      localStorage.setItem("movies", JSON.stringify(newMovies));
      console.log("Saved to localStorage", newMovies);
    },
    { deep: true }
  );

  return {
    movies,
    activeTab,
    setActiveTab,
    watchedMovies,
    totalCountMovies,
    toggleWatched,
    deleteMovie,
  };
});
