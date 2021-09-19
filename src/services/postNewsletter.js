import { api } from "./api";

export const postNewsletter = async ({ email, name }) => {
  try {
    const response = await api.post("/newsletter", {
      email: email,
      name: name
    })
    return response
  } catch (err) {
    return console.error("🚀 ~ file: getProducts.js ~ line 7 ~ getProducts ~ err", err)
  }
};