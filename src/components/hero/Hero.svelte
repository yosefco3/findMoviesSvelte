<script>
  import SearchBox from "./SearchBox.svelte";
  import HeroRadios from "./HeroRadios.svelte";

  let src = "../images/db.svg";
</script>

<style>
  .jumbotron {
    color: orangered;
    background-image: url("../images/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    margin-bottom: 0;
  }
  .db-img {
    width: 80px;
  }
</style>

<!-- the hero section is from here : https://codepen.io/eversionsystems/pen/YOmqdj -->
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Find Your Movie</h1>
    <!-- foto by Felix Mooneeram
      from unsplash -->
    <img {src} alt="db image" class="db-img my-2" />

    <div class="search-buttons mt-3 up">
      <SearchBox />
    </div>

    <HeroRadios />

  </div>

</div>
