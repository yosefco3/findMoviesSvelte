<script>
  import { onMount } from "svelte";
  import { genres, specificMovie } from "../../stores";
  import Stars from "../UI/Stars.svelte";

  export let id = "";
  export let src = "";
  export let title = "";
  export let genre_ids = "";
  export let release_date = "";
  export let vote_average = "";
  export let overview = "";
  export let backdrop_path = "";
  export let original_language = "";

  $: genres_names = "";
  onMount(async () => {
    let gen = await $genres;
    genres_names = await gen
      .filter(x => genre_ids.includes(x.id))
      .map(x => x.name)
      .join(", ");
  });
</script>

<style>
  a {
    text-decoration: none;
  }
  .card-body {
    background-color: black;
    color: white;
  }
</style>

<a href={`/movie/${id}`}>
  <div class="card card-body flex-fill">
    <img class="card-img-top" {src} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{genres_names}</p>
      <p class="card-text">Vote Average: {vote_average.slice(0, -1)}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Release Date: {release_date}</small>
    </div>
  </div>
</a>
