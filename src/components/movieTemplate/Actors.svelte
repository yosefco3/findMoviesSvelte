<script>
  export let actors = "";
  export let imageUrl = "";
</script>

<style>
  img {
    width: 100% !important;
    height: auto !important;
  }
  .card {
    background-color: black;
    color: white;
  }
  span {
    font-size: 0.7em;
    color: cornflowerblue;
    display: block;
  }
</style>

<div class="actors">
  <div class="container-fluid">
    <div class="row">
      {#each actors.cast as actor}
        {#if actor.profile_path}
          <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 d-flex">
            <div class="card flex-fill my-3 mx-3">
              <img
                class="card-img-top"
                src={`${imageUrl}${actor.profile_path}`}
                alt="actor image" />
              <div class="card-body">
                <h5 class="card-title">
                  <span>Character:</span>
                  {actor.character}
                </h5>
                <h5 class="card-title">
                  <span>name:</span>
                  {actor.name}
                </h5>
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
