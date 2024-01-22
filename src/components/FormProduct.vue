<template>
  <div style="width: 50%; margin-left: auto; margin-right: auto">
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" v-model="name_" />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <textarea
        class="form-control"
        rows="2"
        id="description"
        v-model="description_"
      ></textarea>
    </div>
    <div class="mb-3">
      <label for="price" class="form-label">Price</label>
      <input type="text" class="form-control" id="price" v-model="price_" />
    </div>
    <div class="mb-3">
      <label for="quantity" class="form-label">Quantity</label>
      <input
        type="number"
        class="form-control"
        id="quantity"
        v-model="quantity_"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</template>

<script>
export default {
  name: "FormProduct",
  props: {
    name: String,
    description: String,
    price: Number,
    quantity: Number,
  },
  data() {
    return {
      name_: this.name,
      description_: this.description,
      price_: this.price,
      quantity_: this.quantity,
    };
  },
};
</script>
