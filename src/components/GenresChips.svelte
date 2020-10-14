<script>
  import { API_KEY, genres } from "../stores";
  import { onMount } from "svelte";

  let genresObject = [];

  onMount(async () => {
    genresObject = await $genres;
  });

  function toggleGenre(GenreId) {
    genresObject.map(item =>
      item.id === GenreId ? (item.active = !item.active) : ""
    );
    genresObject = [...genresObject];
  }
</script>

<style>
  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    flex-direction: row;
  }
  ul li {
    margin: 10px;
  }
</style>

<div class="genres form-group">
  <p>Search Genres:</p>
  <ul>
    {#each genresObject as item}
      <li
        on:click={toggleGenre(item.id)}
        class="btn-sm"
        class:btn-info={!item.active}
        class:btn-warning={item.active}>
        {item.name}
      </li>
    {/each}

  </ul>
</div>
