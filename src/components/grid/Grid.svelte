<script>
  import Card from "./Card.svelte";
  import { API_KEY, genres, result } from "../../stores";
  import Pagination from "./Pagination.svelte";

  let genresNames = "";
  $: moviesResult = $result[1] ? $result[1].results : undefined;
  $: urlResult = $result[1] ? $result[0] : undefined;
  $: paramsResults = $result[1] ? $result[2] : undefined;
  $: totalPages = $result[1] ? $result[1].total_pages : undefined;

  let imageUrl = "https://image.tmdb.org/t/p/w500";
</script>

<style>
  .grid-container {
    background-color: rgb(0, 6, 26);
  }
</style>

<div class="grid-container">
  <div class="container-fluid">
    <div class="row">
      {#if moviesResult}
        {#each moviesResult as movie}
          {#if movie.poster_path}
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex my-4">
              <Card
                src={`${imageUrl}${movie.poster_path}`}
                title={movie.title}
                genre_ids={movie.genre_ids}
                release_date={movie.release_date} />
            </div>
          {/if}
        {/each}
      {/if}
    </div>
  </div>
</div>
{#if moviesResult}
  <Pagination {totalPages} {paramsResults} {urlResult} />
{/if}
