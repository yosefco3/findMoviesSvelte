<script>
  // I took the router from this tutorial : https://www.youtube.com/watch?v=eohan_OS8N0
  import router from "page";
  import Hero from "./components/hero/Hero.svelte";
  import MovieTemplate from "./components/movieTemplate/MovieTemplate.svelte";
  import NotFound from "./components/NotFound.svelte";
  let page;
  let params;

  router("/", () => (page = Hero));
  router(
    "/movie/:id",
    (ctx, next) => {
      params = ctx.params;
      next();
    },
    () => (page = MovieTemplate)
  );
  router("/*", () => (page = NotFound));

  router.start();
</script>

{#if page === Hero}
  <Hero />
{:else if page === MovieTemplate}
  <MovieTemplate {params} />
{:else}
  <NotFound />
{/if}
