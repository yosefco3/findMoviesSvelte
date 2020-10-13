<script>
  import { genresObject } from "../stores";

  async function toggleGenre(GenreId) {
    await genresObject.update(data =>
      data.then(data => {
        data.map(item =>
          item.id === GenreId ? (item.active = !item.active) : ""
        );
        return data;
      })
    );
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
    {#await $genresObject}
      loading
    {:then data}
      {#each data as item}
        <li
          on:click={toggleGenre(item.id)}
          class="btn-sm"
          class:btn-info={!item.active}
          class:btn-warning={item.active}>
          {item.name}
        </li>
      {/each}
    {/await}
  </ul>
</div>
