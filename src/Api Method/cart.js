import { userRequest } from "../utils/requestMethod";
// get carts
export const GetCartApi = async (cb) => {
	try {
		const res = await userRequest.get(`/carts/`);
		cb(res);
	} catch (err) {
		const error = { errorMsg: "Connection failed", err };
		cb({ error });
	}
};
// create a cart
export const AddToCartApi = async (
	{ quantity, productId, color, size },
	cb
) => {
	console.log(productId);
	try {
		const res = await userRequest.post(`/carts/${productId}`, {
			quantity,
			color,
			size,
		});
		cb(res);
	} catch (err) {
		const error = { errorMsg: "Connection failed", err };
		console.log(error);
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
