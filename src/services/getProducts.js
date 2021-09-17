import { api } from "./api"

export const getProducts = async () => {
  try {
    const response = await api.get("/products")
    return response
  } catch (err) {
    return console.error("🚀 ~ file: getProducts.js ~ line 7 ~ getProducts ~ err", err)
  }
}