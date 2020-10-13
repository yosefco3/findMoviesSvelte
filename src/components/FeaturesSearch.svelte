<script>
  import Pagination from "./Pagination.svelte";
  import MinMaxMinutes from "./MinMaxMinutes.svelte";
  import GenresChips from "./GenresChips.svelte";
  import SortRadios from "./SortRadios.svelte";
  import ReleaseDates from "./ReleaseDates.svelte";
  import Title from "./Title.svelte";
  import BtnSuccess from "./BtnSuccess.svelte";
  import { API_KEY, searchParams, genresObject, loadMovies } from "../stores";

  let minMinutes = "";
  let maxMinutes = "";
  let filterParam = 1;
  let releaseFrom = "";
  let releaseUntil = "";

  // url to do complicated search
  let discoverMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&`;

  $: genStr = $genresObject.then(data => data.filter(item => item.active));

  async function handleSubmit(e) {
    $searchParams["with_runtime.gte"] = minMinutes;
    $searchParams["with_runtime.lte"] = maxMinutes;
    $searchParams["with_genres"] = await genStr.then(data =>
      data.map(item => item.id).join("|")
    );
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
  }
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
</style>

<div class="featured col-md-6">
  <Title>Search By Features</Title>
  <form on:submit|preventDefault={handleSubmit}>
    <GenresChips />
    <MinMaxMinutes bind:minMinutes bind:maxMinutes />
    <SortRadios bind:filterParam />
    <ReleaseDates bind:releaseFrom bind:releaseUntil />
    <BtnSuccess>Search</BtnSuccess>
  </form>
  <Pagination params={searchParams} url={discoverMoviesUrl} />
</div>
