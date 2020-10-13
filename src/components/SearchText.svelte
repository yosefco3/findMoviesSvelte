<script>
  export let searchText;
</script>

<div class="form-group">
  <label for="query" />
  <p>Search Text</p>
  <input type="text" bind:value={searchText} id="query" class="form-control" />
</div>
