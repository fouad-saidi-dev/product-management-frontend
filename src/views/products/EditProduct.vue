<template>
  <form @submit.prevent="updateProduct_">
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
          type="text"
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
  name: "EditProduct",
  data() {
    return {
      product: {
        name: "",
        description: "",
        price: null,
        quantity: null,
      },
    };
  },
  mounted() {
    this.getProduct_();
  },
  methods: {
    async getProduct_() {
      try {
        const response = await productService.getProduct(this.$route.params.id);
        console.log(response.data);
        const { name, description, price, quantity } = response.data;
        this.product.name = name;
        this.product.description = description;
        this.product.price = price;
        this.product.quantity = quantity;
      } catch (error) {
        console.log(error);
      }
    },
    async updateProduct_() {
      try {
        const response = await productService.updateProduct(
          this.product,
          this.$route.params.id
        );
        this.$router.push("/products");
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
