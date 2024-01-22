import http from "./http";

const login = (user) => {
  return http.post(`/login`, user);
};

const userService = {
  login,
};

export default userService;
