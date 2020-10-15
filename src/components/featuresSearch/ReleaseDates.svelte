<script>
  export let releaseFrom;
  export let releaseUntil;
</script>

<style>
  #release-from,
  #release-until {
    display: block !important;
    width: 40%;
  }

  @media (max-width: 900px) {
    #release-from,
    #release-until {
      width: 80%;
      display: block;
    }
  }
</style>

<div class="form">
  <div class="form-group mx-sm-3">
    <label for="release-from">Release from:</label>
    <input
      type="date"
      bind:value={releaseFrom}
      class="form-control ml-3"
      id="release-from" />
  </div>
  <div class="form-group mx-sm-3 mt-3">
    <label for="release-until:">Release Until:</label>
    <input
      type="date"
      bind:value={releaseUntil}
      class="form-control ml-3"
      id="release-until" />
  </div>
</div>
