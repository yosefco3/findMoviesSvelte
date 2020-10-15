<script>
  import {
    API_KEY,
    simpleSearchParams,
    loadMovies,
    modalOpen,
    result
  } from "../../stores";
  import Title from "../UI/Title.svelte";
  import SearchText from "./SearchText.svelte";
  import Buttons from "../UI/Buttons.svelte";

  let error = false;
  let searchText = "";

  // url to search by query
  let searchMoviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&`;

  async function handleSubmit() {
    if (searchText !== "") {
      $simpleSearchParams["query"] = searchText;
      await loadMovies(searchMoviesUrl, $simpleSearchParams);
      $modalOpen.open = !$modalOpen.open;
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
  p {
    color: red;
  }
</style>

<div class="">
  <form on:submit|preventDefault={handleSubmit}>
    <SearchText bind:searchText />
    <Buttons>Search</Buttons>
  </form>
  {#if error}
    <p>You should give a query search!</p>
  {/if}
</div>
