import { publicRequest, userRequest } from "../utils/requestMethod";
export const GetProductApi = async (cb) => {
	try {
		const res = await publicRequest.get("/products");
		cb(res);
	} catch (err) {
		cb({ error: { errorMsg: "Connection failed", err } });
	}
};
export const GetSingleProductApi = async (productId, cb) => {
	try {
		const res = await publicRequest.get(`/products/${productId}`);
		cb(res);
	} catch (err) {
		cb({ error: { errorMsg: "Connection failed", err } });
	}
};

export const searchProductApi = async (keyword, cb) => {
	const res = await publicRequest.get(`products/search/${keyword}`);
	cb(res);
};

export const AddProductApi = async (product, cb) => {};
