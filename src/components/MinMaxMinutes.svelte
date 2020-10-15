<script>
  export let minMinutes;
  export let maxMinutes;
</script>

<style>
  #min-minutes,
  #max-minutes {
    display: block !important;
    width: 40%;
  }

  @media (max-width: 900px) {
    #min-minutes,
    #max-minutes {
      width: 80%;
      display: block;
    }
  }
</style>

<div class="form">
  <div class="form-group mx-sm-3 mb-2">
    <label for="min_minutes">Min minutes</label>
    <input
      type="number"
      bind:value={minMinutes}
      class="form-control ml-3"
      id="min-minutes" />
  </div>
  <div class="form-group mb-2 mx-sm-3">
    <label for="max_minutes">Max minutes</label>
    <input
      type="number"
      bind:value={maxMinutes}
      class="form-control ml-3"
      id="max-minutes" />
  </div>
</div>
