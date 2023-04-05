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
		console.log(err.response);
		return err.response;
	}
};

export const validateOrder = async (props) => {
	try {
		await userRequest.get(
			`/orders/validate/${props.params.order_id}/${props.params.createdAt}`
		);
		return "";
	} catch (error) {
		window.location.assign("/home");
		return "";
	}
};
