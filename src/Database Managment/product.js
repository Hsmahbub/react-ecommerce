import { publicRequest } from "../utils/requestMethod";
export const getProduct = async (callback) => {
	const { data } = await publicRequest.get("/products");
	callback(data);
};
export const singleProduct = async (productId, callback) => {
	const { data } = await publicRequest.get(`/products/${productId}`);
	callback(data);
};
