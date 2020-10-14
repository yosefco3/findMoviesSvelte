<script>
  export let releaseFrom;
  export let releaseUntil;
</script>

<div class="form-inline">
  <div class="form-group mx-sm-3 d-flex">
    <label for="release-from">Release from:</label>
    <input
      type="date"
      bind:value={releaseFrom}
      class="form-control ml-3"
      id="release-from" />
  </div>
  <div class="form-group mx-sm-3 d-flex mt-3">
    <label for="release-until:">Release Until:</label>
    <input
      type="date"
      bind:value={releaseUntil}
      class="form-control ml-3"
      id="release-until" />
  </div>
</div>
