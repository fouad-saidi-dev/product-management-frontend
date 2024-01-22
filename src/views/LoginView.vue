<template>
  <div
    style="margin-left: auto; margin-right: auto; width: 50%; margin-top: 10%"
    class="container"
  >
    <form @submit.prevent="login" method="post">
      <div class="mb-3">
        <input
          type="text"
          name="email"
          v-model="user.email"
          placeholder="email"
          class="form-control"
        />
      </div>
      <br />
      <div class="mb-3">
        <input
          type="password"
          name="password"
          v-model="user.password"
          placeholder="password"
          class="form-control"
        />
      </div>
      <button type="submit" class="btn btn-info">login</button>
    </form>
  </div>
</template>

<script>
import userService from "../services/user-service";
export default {
  name: "LoginVue",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        const response = await userService.login(this.user);
        const token = response.data.access_token;
        localStorage.setItem("token", token);
        const user_id = response.data.user_id;
        localStorage.setItem("user_id", user_id);
        console.log("Response", response.data);
      } catch (error) {
        console.error("Error", error);
      }
    },
  },
};
</script>
