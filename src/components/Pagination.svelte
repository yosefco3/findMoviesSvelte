<script>
  import { loadMovies } from "../stores";
  export let params;
  export let url;

  let nextPage = async () => {
    $params["page"] += 1;
    await loadMovies(url, $params);
  };
  let formerPage = async () => {
    $params["page"] > 0 ? ($params["page"] -= 1) : "";
    await loadMovies(url, $params);
  };
</script>

<button on:click={nextPage}>next page</button>
<button on:click={formerPage}>former page</button>
