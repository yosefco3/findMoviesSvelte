<script>
  import { loadMovies, result } from "../../stores";
  import { onMount } from "svelte";

  export let paramsResults;
  export let urlResult;
  export let totalPages;
  $: maxPages = paramsResults["page"] === totalPages;
  $: zeroPages = paramsResults["page"] === 1;

  let nextPage = async () => {
    if (paramsResults["page"] < totalPages) {
      paramsResults["page"] += 1;
      let url = urlResult.split("&")[0] + "&";
      loadMovies(url, paramsResults);
      scrollToGrid();
    } else {
      maxPagesError = true;
    }
  };

  let formerPage = async () => {
    if (paramsResults["page"] > 1) {
      console.log(paramsResults["page"]);
      paramsResults["page"] -= 1;
      let url = urlResult.split("&")[0] + "&";
      loadMovies(url, paramsResults);
      scrollToGrid();
    } else {
      zeroPagesError = true;
    }
  };

  function scrollToGrid() {
    document.querySelector("#hero-box").scrollIntoView({ behavior: "smooth" });
  }
</script>

<style>
  .pagination {
    display: flex;
    justify-content: center;
  }

  button {
    font-size: 2rem;
  }
</style>

<div class="pagination">
  {#if !zeroPages}
    <button class="btn btn-warning" on:click={formerPage}>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-arrow-left-square-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0
          0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1
          0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707
          8.5H11.5z" />
      </svg>
    </button>
  {/if}

  <button class="btn btn-warning">{paramsResults['page']}</button>

  {#if !maxPages}
    <button class="btn btn-warning" on:click={nextPage}>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-arrow-right-square-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0
          0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1
          .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293
          8.5H4.5z" />
      </svg>
    </button>
  {/if}

</div>
