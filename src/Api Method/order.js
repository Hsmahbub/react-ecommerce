import { userRequest } from "../utils/requestMethod";

// create order api
export const CreateOrderApi = async ({ billingId, cartId }, cb) => {
	try {
		const orderCartItemsId = cartId;
		const res = await userRequest.post(`/orders/`, {
			billingId,
			orderCartItemsId,
		});
		cb(res);
	} catch (err) {
		cb(err?.response);
	}
};

// get order api
export const GetOrderApi = async (cb) => {
	try {
		const res = await userRequest.get("/orders");
		cb(res);
	} catch (err) {
		cb(err?.response);
	}
};
