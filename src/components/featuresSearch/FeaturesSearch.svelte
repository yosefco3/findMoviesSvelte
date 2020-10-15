<script>
  import MinMaxMinutes from "./MinMaxMinutes.svelte";
  import SortRadios from "./SortRadios.svelte";
  import ReleaseDates from "./ReleaseDates.svelte";
  import Title from "../UI/Title.svelte";
  import Buttons from "../UI/Buttons.svelte";
  import { onMount } from "svelte";
  import {
    API_KEY,
    searchParams,
    loadMovies,
    genres,
    modalOpen
  } from "../../stores";
  import GenresChips from "./GenresChips.svelte";

  let minMinutes = "";
  let maxMinutes = "";
  let filterParam = 1;
  let releaseFrom = "";
  let releaseUntil = "";
  let genresObject = [];

  let discoverMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&`;

  onMount(async () => {
    genresObject = await $genres;
  });

  async function handleSubmit(e) {
    $searchParams["with_runtime.gte"] = minMinutes;
    $searchParams["with_runtime.lte"] = maxMinutes;
    $searchParams["with_genres"] = await genresObject
      .filter(item => item.active)
      .map(item => item.id)
      .join("|");
    switch (filterParam) {
      case 1:
        $searchParams["sort_by"] = "popularity.desc";
        break;
      case 2:
        $searchParams["sort_by"] = "vote_average.desc";
        break;
      case 3:
        $searchParams["sort_by"] = "revenue.desc";
        break;
      default:
        $searchParams["sort_by"] = "popularity.desc";
    }
    $searchParams["release_date.gte"] = releaseFrom;
    $searchParams["release_date.lte"] = releaseUntil;
    await loadMovies(discoverMoviesUrl, $searchParams);
    $modalOpen.open = !$modalOpen.open;
  }
</script>

<style>

</style>

<div class="featured col-9">
  <form on:submit|preventDefault={handleSubmit}>
    <GenresChips />
    <MinMaxMinutes bind:minMinutes bind:maxMinutes />
    <SortRadios bind:filterParam />
    <ReleaseDates bind:releaseFrom bind:releaseUntil />
    <Buttons>Search</Buttons>
  </form>
</div>
