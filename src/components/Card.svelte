<script>
  import { onMount } from "svelte";
  import { genres } from "../stores";
  export let src = "";
  export let title = "";
  export let genre_ids = "";

  $: genres_names = "";
  onMount(async () => {
    let gen = await $genres;
    genres_names = await gen
      .filter(x => genre_ids.includes(x.id))
      .map(x => x.name)
      .slice(0, 3);
  });
</script>

<div class="card" style="width: 18rem;">
  <img class="card-img-top" {src} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{genres_names}</p>
  </div>
  <!-- <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div> -->
</div>
