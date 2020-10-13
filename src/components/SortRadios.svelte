<script>
  export let filterParam;
</script>

<div class="form-group">
  <p>Sort by:</p>
  <div class="form-inline mb-3">
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="popularity"
        bind:group={filterParam}
        value={1}
        id="popularity" />
      <label class="form-check-label" for="popularity">popularity</label>
    </div>
    <div class="form-check ml-3">
      <input
        class="form-check-input"
        type="radio"
        name="rating"
        bind:group={filterParam}
        value={2}
        id="rating" />
      <label class="form-check-label" for="rating">rating</label>
    </div>
    <div class="form-check ml-3">
      <input
        class="form-check-input"
        type="radio"
        name="revenues"
        bind:group={filterParam}
        value={3}
        id="revenues" />
      <label class="form-check-label" for="revenues">revenues</label>
    </div>

  </div>
</div>
