import httpCommon from "./http-common";

const addProduct = (product) => {
  return httpCommon.post("/products", product);
};

const getProducts = (filters) => {
  return httpCommon.get("/products", filters);
};

const updateProduct = (product, id) => {
  return httpCommon.put(`products/${id}`, product);
};

const deleteProduct = (id) => {
  return httpCommon.delete(`products/${id}`);
};

const getProduct = (id) => {
  return httpCommon.get(`products/${id}`);
};

const postService = {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProduct,
};

export default postService;
