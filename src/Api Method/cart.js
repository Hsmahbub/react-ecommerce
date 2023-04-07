import { userRequest } from "../utils/requestMethod";
// get carts
export const GetCartApi = async () => {
	try {
		const res = await userRequest.get(`/carts`);
		return res;
	} catch (err) {
		return [{}];
	}
};
// create a cart
export const AddToCartApi = async (data, cb) => {
	try {
		const res = await userRequest.post(`/carts/${data._id}`, data);
		cb(res);
	} catch (err) {
		cb(err?.response);
	}
};

export const DeleteCartItemApi = async (productId, cb) => {
	try {
		const res = await userRequest.delete(`/carts/${productId}`);
		cb(res);
	} catch (err) {
		cb(err?.response);
	}
};
