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
  .actors {
    margin-top: 2rem;
  }
  .scale-up-center {
    -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  /* ----------------------------------------------
 * Generated by Animista on 2020-10-17 13:5:39
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation scale-up-center
 * ----------------------------------------
 */
  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
</style>

<div class="actors">
  <div class="container-fluid">
    <div class="row">
      {#each actors.cast as actor}
        {#if actor.profile_path}
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <div class="card flex-fill my-3 mx-3 scale-up-center">
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
