<template>
  <div>
    <div class="movie">
      <img
        :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
        :alt="movie.original_title"
        class="movie-img"
      />
      <div>
        <div class="movie-name">
          {{ movie.original_title }} ({{ movie.release_date }})
        </div>
        <span class="movie-overview">
          {{ movie.overview }}
        </span>
        <div class="movie-buttons">
          <button class="btn movie-buttons-watched">
            <span v-if="!movie.isWatched">Просмотрено</span>
            <span v-else>Непросмотренный</span>
          </button>
          <button class="btn movie-buttons-delete">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}

.movie-accept {
  margin-right: 10px;
}

.movie-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

.movie-name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.movie-overview {
  display: block;
  margin-bottom: 20px;
}

.movie-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.movie-buttons-watched {
  color: #fff;
  background: #1eb4c3;
  padding: 10px 15px;
  border: solid 1px #1eb4c3;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.movie-buttons-watched:hover {
  background: #1598a0;
  color: #e0e0e0;
}

.movie-buttons-watched__icon {
  width: 15px;
  margin-left: 10px;
}

.movie-buttons-delete {
  color: #fff;
  background: #ff2a2a;
  padding: 10px 15px;
  border: solid 1px #ff2a2a; 
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; 
}

.movie-buttons-delete:hover {
  background: #e02626; 
  color: #f5f5f5; 
}
</style>
