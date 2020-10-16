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
  .card {
    height: 110vh;
  }

  @media screen and (max-width: 960px) {
    .card {
      height: 105vh;
    }
  }
  /* 
  @media screen and (max-width: 720px) {
    .card {
      height: 130vh;
    }
  } */
</style>

<a href={`/movie/${id}`}>
  <div class="card card-body flex-fill">
    <img class="card-img-top" {src} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p>
        <small class="card-text">{genres_names}</small>
      </p>
      <p>
        <small class="card-text">
          Vote Average: {vote_average.slice(0, -1)}
        </small>
      </p>
      <p>

        <small class="text-muted">Release Date: {release_date}</small>

      </p>

    </div>
    <div class="card-footer">
      <br />
    </div>
  </div>
</a>
