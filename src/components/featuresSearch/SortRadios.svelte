<script>
  export let filterParam;
  let searches = ["Popularity", "Rating", "Revenues"];
</script>

<style>
  .search {
    margin-left: 10px !important;
  }
</style>

<div class="form-group">
  <p>Sort by:</p>

  <div class="form-inline mb-3">
    {#each searches as item, i}
      <div class="form-check search">
        <input
          class="form-check-input"
          type="radio"
          name={item}
          bind:group={filterParam}
          value={i + 1}
          id={item} />
        <label class="form-check-label" for={item}>{item}</label>
      </div>
    {/each}
  </div>
</div>
