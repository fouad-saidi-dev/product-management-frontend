<template>
  <form @submit.prevent="addProduct">
    <div style="width: 50%; margin-left: auto; margin-right: auto">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="product.name"
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          class="form-control"
          rows="2"
          id="description"
          v-model="product.description"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input
          type="number"
          class="form-control"
          id="price"
          v-model="product.price"
        />
      </div>
      <div class="mb-3">
        <label for="quantity" class="form-label">Quantity</label>
        <input
          type="number"
          class="form-control"
          id="quantity"
          v-model="product.quantity"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
import productService from "@/services/product-service";
export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        name: "",
        description: "",
        quantity: "",
        price: "",
      },
    };
  },
  methods: {
    async addProduct() {
      try {
        const response = await productService.addProduct(this.product);
        console.log("Success", response.data);
        this.$router.push("/products");
      } catch (error) {
        console.error("Error", error);
      }
    },
  },
};
</script>
