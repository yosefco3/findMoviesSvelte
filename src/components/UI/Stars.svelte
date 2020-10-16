<script>
  export let vote_average;
  $: vote_average = vote_average.slice(0, -1);
  $: stars = Math.floor(vote_average / 2);
  $: half_stars = (vote_average / 2) % 1 >= 0.5 ? 1 : 0;
  $: empty_stars = 5 - stars - half_stars;
</script>

<style>
  img {
    width: 2rem;
    height: 2rem;
    margin: 0 !important;
    background-color: black;
  }
</style>

{#each Array(stars) as _}
  <img src="/images/star.png" alt="star" />
{/each}
{#each Array(half_stars) as _}
  <img src="/images/half_star.jpeg" alt="star" />
{/each}
{#each Array(empty_stars) as _}
  <img src="/images/empty.png" alt="star" />
{/each}
