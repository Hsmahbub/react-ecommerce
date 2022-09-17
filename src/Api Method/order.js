import { userRequest } from "../utils/requestMethod";

// create order api
export const CreateOrderApi = async ({ BillingId, cartId }, cb) => {
	try {
		const res = await userRequest.post(`/orders/${cartId}`, { BillingId });
		cb(res);
	} catch (err) {
		cb(err);
	}
};

// get order api
export const GetOrderApi = async (cb) => {
	try {
		const res = await userRequest.get("/orders");
		cb(res);
	} catch (err) {
		cb(err);
	}
};
