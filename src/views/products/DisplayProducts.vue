<template>
  <div class="container">
    <div class="row">
      <div class="col-auto">
        <input
          type="search"
          class="form-control"
          name="search"
          v-model="search"
          placeholder="search by name"
        />
      </div>
    </div>
    <form @submit.prevent="displayProducts">
      <div class="row mt-3">
        <div class="col-auto">
          <input
            type="search"
            class="form-control"
            name="name"
            v-model="filters.name"
            placeholder="Filter by name"
          />
        </div>

        <div class="col-auto">
          <input
            type="number"
            class="form-control"
            name="qte_inf"
            v-model="filters.qte_inf"
            placeholder="Filter by quantity - min"
          />
        </div>
        <div class="col-auto">
          <input
            type="number"
            class="form-control"
            name="search"
            v-model="filters.qte_sup"
            placeholder="Filter by quantity - max"
          />
        </div>
        <div class="col-auto">
          <input
            type="number"
            class="form-control"
            name="min_price"
            v-model="filters.min_price"
            placeholder="Filter by price - max"
          />
        </div>
        <div class="col-auto">
          <input
            type="number"
            class="form-control"
            name="max_price"
            v-model="filters.max_price"
            placeholder="Filter by price - max"
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-success mt-1">Filter</button>
        </div>
      </div>
    </form>

    <table
      class="table"
      style="margin-top: 5%; margin-left: auto; margin-right: auto"
    >
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in searchProduct" :key="i">
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td>
            <button class="btn btn-danger" @click="deleteProduct_(product.id)">
              delete</button
            ><router-link
              href=""
              class="btn btn-success"
              :to="{ name: 'EditProduct', params: { id: product.id } }"
              >edit</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center">
      <nav aria-label="Page navigation example ">
        <ul class="pagination">
          <li
            class="page-item"
            :class="{ disabled: products.current_page === 1 }"
          >
            <button
              class="page-link"
              @click="changePage(products.current_page - 1)"
            >
              Previous
            </button>
          </li>
          <li class="page-item" v-for="page in products.last_page" :key="page">
            <button class="page-link" @click="changePage(page)">
              {{ page }}
            </button>
          </li>
          <li
            class="page-item"
            :class="{ disabled: products.last_page === products.current_page }"
          >
            <button
              class="page-link"
              @click="changePage(products.current_page + 1)"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import productService from "@/services/product-service";
export default {
  name: "DisplayProducts",
  data() {
    return {
      products: {
        data: [],
        current_page: 1,
        last_page: 1,
      },
      filters: {
        name: "",
        qte_inf: null,
        qte_sup: null,
        min_price: null,
        max_price: null,
      },
      page: {},
      search: "",
    };
  },
  mounted() {
    this.displayProducts();
  },
  computed: {
    searchProduct() {
      return this.products.data.filter((product) =>
        product.name.match(this.search)
      );
    },
  },
  methods: {
    async displayProducts(page = 1) {
      try {
        const response = await productService.getProducts({
          params: { ...this.hasFilters(), page },
        });
        this.products = response.data;
        console.log("Products", response.data);
      } catch (error) {
        console.error("Error", error);
      }
    },
    async deleteProduct_(id) {
      try {
        if (confirm("Are you sure you want delete this !")) {
          const response = await productService.deleteProduct(id);
          console.log(response.data);
          this.displayProducts();
        }
      } catch (error) {
        console.error(error);
      }
    },
    hasFilters() {
      const params = {};
      for (const [key, value] of Object.entries(this.filters)) {
        if (value !== null && value !== "") {
          params[key] = value;
        }
      }
      return params;
    },
    changePage(page) {
      console.log("Changing page to:", page);
      if (page >= 1 && page <= this.products.last_page) {
        this.displayProducts(page);
      }
    },
  },
};
</script>
