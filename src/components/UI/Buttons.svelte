<script>
  import { modalOpen } from "../../stores";

  let close = () => {
    $modalOpen.open = !$modalOpen.open;
    $modalOpen.name = "";
  };
</script>

<style>
  .buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }

  /* @media (max-width: 900px) { */
  /* .buttons { */
  /* } */
  /* } */
</style>

<div class="buttons form-group">
  <button class="btn btn-danger btn" type="reset" on:click={close}>
    Close
  </button>

  <button type="submit" class="btn btn-success">
    <slot>
      <!--  -->
    </slot>
  </button>
</div>
