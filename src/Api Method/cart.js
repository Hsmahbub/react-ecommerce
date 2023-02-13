import { userRequest } from "../utils/requestMethod";
// get carts
export const GetCartApi = async (cb) => {
	try {
		const res = await userRequest.get(`/carts/`);
		cb(res);
	} catch (err) {
		cb(err?.response);
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
export const RemoveFromCart = async (prodId, cb) => {
	try {
		const res = await userRequest.delete(`/carts/${prodId}`);
		cb(res);
	} catch (err) {
		console.log(err)
		cb(err?.response);
	}
};

export const DeleteCartItemApi = async (productId) => {
	try {
		const res = await userRequest.delete(`/carts/${productId}`);
		console.log(res);
	} catch (err) {
		const error = { errorMsg: "Connection failed", err };
		console.log(error);
	}
};
