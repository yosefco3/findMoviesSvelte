<script>
  export let minMinutes;
  export let maxMinutes;
</script>

<div class="form-inline">
  <div class="form-group mx-sm-3 mb-2">
    <label for="min_minutes">Min minutes</label>
    <input
      type="number"
      bind:value={minMinutes}
      class="form-control ml-3"
      id="min_minutes" />
  </div>
  <div class="form-group mb-2 mx-sm-3">
    <label for="max_minutes">Max minutes</label>
    <input
      type="number"
      bind:value={maxMinutes}
      class="form-control ml-3"
      id="max_minutes" />
  </div>
</div>
