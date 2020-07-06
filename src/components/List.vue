<template>
  <div class="list">
    <div id="" class="card rounded card-width">
      <div class="card-body p-0">
        <div class="d-block" style="background-color: #ff0000">
          <span
            id=" "
            class="card-title d-inline text-center ml-2 mt-2 gochi-hand-font list-title"
          >
            List Title
          </span>
          <button
            type="button"
            class="btn d-inline float-right remove-list"
            onclick=""
          >
            X
          </button>
        </div>
        <p class="card-text">
          <Task />
        </p>
        <button
          type="button"
          class="btn btn-outline-danger ml-2 p-1"
          onclick=""
        >
          <small>Remove Completed</small>
        </button>
        <form class="form-inline mx-1 my-1">
          <div class="">
            <label for="task"></label>
            <input
              type="text"
              name="task"
              class="form-control d-inline"
              placeholder="new task"
              aria-describedby="new task"
            />
            <button type="submit" class="btn btn-outline-info ml-3" d-inline>
              <i class="fas fa-plus    "></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./Task";
export default {
  name: "List",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    Task,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Lato&display=swap");

.gochi-hand-font {
  font-family: "Gochi Hand", cursive;
}

.list-title {
  font-size: 1.5rem;
}
</style>
