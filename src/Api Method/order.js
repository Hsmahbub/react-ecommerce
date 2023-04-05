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
export const GetOrderApi = async () => {
	try {
		return await userRequest.get("/orders");
	} catch (err) {
		return err.response;
	}
};
