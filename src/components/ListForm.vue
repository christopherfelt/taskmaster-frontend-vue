<template>
  <div class="list-form">
    <form class="form-inline" onsubmit="app.listController.addList(event)">
      <div class="form-group">
        <label class="font-weight-bold mr-1" for="title">List Name: </label>
        <input
          type="text"
          name="title"
          id=""
          class="form-control mr-1"
          placeholder="Todo, Groceries etc ..."
          aria-describedby="helpId"
        />
        <label class="mr-1" for="listColor"
          ><span class="font-weight-bold mr-1">Color: </span>
          <input
            id="chooseColor"
            class="mr-1"
            type="color"
            name="listColor"
            value="#ff0000"
          />
        </label>
        <button type="submit" class="btn btn-primary">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "list-form",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped>
/* Borrowed color picker css from  https://stackoverflow.com/questions/47971289/input-type-color-styling*/
#chooseColor {
  border-radius: 100%;
  height: 30px;
  width: 30px;
  border: none;
  outline: none;
  -webkit-appearance: none;
}

#chooseColor::-webkit-color-swatch-wrapper {
  padding: 0;
}
#chooseColor::-webkit-color-swatch {
  border: none;
  border-radius: 100%;
}
</style>
