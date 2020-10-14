<script>
  import Card from "./Card.svelte";
  import { API_KEY, genres, result } from "../stores";

  let genresNames = "";
  $: moviesResult = $result[1] ? $result[1].results : undefined;
  $: urlResult = $result[0];

  let imageUrl = "https://image.tmdb.org/t/p/w500";
</script>

<div class="">
  {#if moviesResult}
    {#each moviesResult as movie}
      {#if movie.poster_path}
        <Card
          src={`${imageUrl}${movie.poster_path}`}
          title={movie.title}
          genre_ids={movie.genre_ids} />
      {/if}
    {/each}
  {/if}
</div>
