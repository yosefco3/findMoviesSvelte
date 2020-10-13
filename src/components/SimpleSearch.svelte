<script>
  import Pagination from "./Pagination.svelte";
  import { API_KEY, SimpleSearchParams, loadMovies } from "../stores";
  import Title from "./Title.svelte";
  import SearchText from "./SearchText.svelte";
  import BtnSuccess from "./BtnSuccess.svelte";

  let error = false;
  let searchText = "";

  // url to search by query
  let searchMoviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&`;

  async function handleSubmit() {
    if (searchText !== "") {
      $SimpleSearchParams["query"] = searchText;
      await loadMovies(searchMoviesUrl, $SimpleSearchParams);
    } else {
      error = true;
    }
  }
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
</style>

<div class="">
  <Title>Search By Text</Title>
  <form on:submit|preventDefault={handleSubmit}>
    <SearchText bind:searchText />
    <BtnSuccess>Search</BtnSuccess>
  </form>
  {#if error}
    <p>You should give a query search!</p>
  {/if}
  <Pagination params={SimpleSearchParams} url={searchMoviesUrl} />
</div>
