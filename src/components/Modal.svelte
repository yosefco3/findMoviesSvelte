<script>
  import { modalOpen } from "../stores";
  import Keydown from "svelte-keydown";

  $: largeWindow = $modalOpen.size === "lg";
  $: smallWindow = $modalOpen.size === "sm";

  const toggle = () => {
    $modalOpen.size = undefined;
    $modalOpen.open = !$modalOpen.open;
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    position: absolute;
    padding: 1rem;
    top: 10vh;
    left: 5vw;
    width: 90%;
    max-height: 80vh;
    background: rgb(0, 26, 6);
    color: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: auto;
    display: block;
  }

  .sm {
    width: 20rem !important;
    height: 52vh !important;
    overflow: auto;
  }

  footer {
    padding: 1rem;
  }

  /* @media (min-width: 768px) {
    .modal {
      width: 50%;
    }
  } */
</style>

<Keydown on:Escape={toggle} />
<!-- the modal object is from udemy course of maxemilian -->
<!--  https://www.udemy.com/share/101YaQA0sSeVxbTHo=/ -->

<div class="modal-backdrop" on:click={toggle} />
<div class="modal" class:sm={smallWindow}>
  <slot name="title">
    <!-- title -->
  </slot>
  <div class="content">
    <slot name="content">
      <!-- content -->
    </slot>
  </div>
  <footer>
    <!-- <slot name="footer"> -->
    <!-- <button on:click={toggle}>Close</button> -->
    <!-- </slot> -->
  </footer>
</div>
