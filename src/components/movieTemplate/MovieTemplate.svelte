<script>
  import { API_KEY } from "../../stores";
  import { onMount } from "svelte";
  import Actors from "./Actors.svelte";
  export let params;

  let urlMovie = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`;
  let imageUrl = "https://image.tmdb.org/t/p/w500";
  let urlActors = `http://api.themoviedb.org/3/movie/${params.id}/casts?api_key=${API_KEY}`;

  $: movie = "";
  $: actors = "";
  $: console.log(actors);
  $: src = movie ? `${imageUrl}${movie.poster_path}` : "";

  let fetchUrl = async (url, kind) => {
    let res = await fetch(url);
    kind = await res.json();
    return kind;
  };

  onMount(async () => {
    movie = await fetchUrl(urlMovie, movie);
    actors = await fetchUrl(urlActors, actors);
  });
</script>

<style>
  .movie-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .box {
    background-color: black;
    color: white;
  }
</style>

<div class="movie-container container-fluid">
  <a href={`/`} class="my-5">
    <button class="btn btn-success">Back To Home Page</button>
  </a>
  {#if movie}
    <div class="card box" style="max-width: 60vw;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img {src} class="card-img" alt="movie-img" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{movie.title}</h5>
            <p class="card-text">{movie.overview}</p>
            <p class="card-text text-muted">
              Vote Average: {movie.vote_average}
            </p>
            <p class="card-text text-muted">
              Realese Date: {movie.release_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
{#if actors}
  <Actors {actors} {imageUrl} />
{/if}
