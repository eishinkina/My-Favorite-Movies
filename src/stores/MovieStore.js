import { defineStore } from "pinia";

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    movies: [
      {
        id: 1,
        original_title: "Человек-паук",
        overview:
          "После укуса генетически измененного паука в Оскорпе занудный, но обаятельный старшеклассник Питер Паркер наделен удивительными способностями, позволяющими ему стать супергероем, известным как Человек-Паук.",
        poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
        release_date: "2002-05-01",
        isWatched: true,
      },
      {
        id: 2,
        original_title: "Бэтмен",
        overview:
          "На втором году борьбы с преступностью Бэтмен раскрывает коррупцию в Готэм-сити, которая связана с его собственной семьей, когда он сталкивается с серийным убийцей, известным как Риддлер.",
        poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
        release_date: "2022-03-01",
        isWatched: false,
      },
    ],
    activeTab: 1,
  }),
  getters: {
    watchedMovies() {
      return this.movies.filter((el) => el.isWatched === true);
    },
    totalCountMovies() {
      return this.movies.length;
    },
  },
});
