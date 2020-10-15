<script>
  import { onMount } from "svelte";
  import { basicSearchParams, API_KEY, loadMovies } from "../../stores";
  import Title from "../UI/Title.svelte";
  let discoverMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&`;

  export let filterParam = 1;

  let searchKinds = ["Popularity", "Rating", "Revenues"];

  let handleSubmit = async e => {
    switch (filterParam) {
      case 1:
        $basicSearchParams["sort_by"] = "popularity.desc";
        break;
      case 2:
        $basicSearchParams["sort_by"] = "vote_average.desc";
        break;
      case 3:
        $basicSearchParams["sort_by"] = "revenue.desc";
        break;
      default:
        $basicSearchParams["sort_by"] = "popularity.desc";
    }
    await loadMovies(discoverMoviesUrl, $basicSearchParams);
  };

  onMount(async () => {
    await loadMovies(discoverMoviesUrl, $basicSearchParams);
  });
</script>

<style>
  /* the style is from here: */
  /* https://stackoverflow.com/questions/4253920/how-do-i-change-the-color-of-radio-buttons */
  /* answer of https://stackoverflow.com/users/2936345/jamied */
  #hero-box {
    margin-top: 10vh;
  }
  .buttons {
    display: flex;
    width: 40%;
  }
  input[type="radio"] {
    /* remove standard background appearance */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* create custom radiobutton appearance */
    display: inline-block;
    width: 25px;
    height: 25px;
    padding: 6px;
    /* background-color only for content */
    background-clip: content-box;
    border: 2px solid #bbbbbb;
    background-color: #e7e6e7;
    border-radius: 50%;
  }
  /* appearance for checked radiobutton */
  input[type="radio"]:checked {
    background-color: orangered;
  }
</style>

<div id="hero-box">
  <Title>Basic Search:</Title>
  <div class="buttons">
    {#each searchKinds as item, i}
      <label class="container">
        <input
          type="radio"
          bind:group={filterParam}
          value={i + 1}
          id={item}
          on:change={handleSubmit} />
        {item}
      </label>
    {/each}
  </div>
</div>
