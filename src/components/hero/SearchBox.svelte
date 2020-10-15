<script>
  import FeaturesSearch from "../featuresSearch/FeaturesSearch.svelte";
  import SimpleSearch from "../textSearch/SimpleSearch.svelte";
  import Modal from "../UI/Modal.svelte";
  import { modalOpen } from "../../stores";
  import Title from "../UI/Title.svelte";

  let featuresSearch = () => {
    $modalOpen.size = "lg";
    $modalOpen.name = "features";
    $modalOpen.open = !$modalOpen.open;
  };

  let simpleSearch = () => {
    $modalOpen.size = "sm";
    $modalOpen.name = "simple";
    $modalOpen.open = !$modalOpen.open;
  };

  const toggle = () => {
    $modalOpen.size = undefined;
    $modalOpen.open = !$modalOpen.open;
  };
</script>

<style>
  button {
    background-color: orangered;
    border: none;
  }
  button:hover {
    background-color: orange;
  }
  .buttons-container {
    display: flex;
  }
</style>

<div class="buttons-container">
  <button class="btn btn-info" on:click={featuresSearch}>
    Search By Features
  </button>
  <button class="btn btn-info ml-5" on:click={simpleSearch}>
    Search By Text
  </button>
</div>
{#if $modalOpen.open && $modalOpen.name === 'features'}
  <Modal>
    <span slot="title">
      <Title>Search By Features</Title>
    </span>
    <span slot="content">
      <FeaturesSearch />
    </span>
  </Modal>
{/if}
{#if $modalOpen.open && $modalOpen.name === 'simple'}
  <Modal>
    <span slot="title">
      <Title>Search By Text</Title>
    </span>
    <span slot="content">
      <SimpleSearch />
    </span>
  </Modal>
{/if}

<!-- 
<button on:click={toggle}>here</button>
{#if $openModal}
  <Modal title="hhhh">
    <h1 name="content">kkkkkkkkkkkkkkkkk</h1>
  </Modal>
{/if} -->
