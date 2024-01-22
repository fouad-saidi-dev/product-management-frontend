<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="@/assets/logo.png" alt="EduVibe" style="width: 50px"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="link in links" :key="link">
              <a class="nav-link active" aria-current="page" href="">{{
                link
              }}</a>
            </li>
          </ul>

          <form class="d-flex">
            <router-link class="btn btn-outline-success" to="/login"
              >Login</router-link
            >
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      links: ["Home", "Product"],
    };
  },
};
</script>
