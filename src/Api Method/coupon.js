import { userRequest } from "../utils/requestMethod";
export const getCoupon = async (email, cb) => {
	try {
		const res = await userRequest.post("/coupons/", { email });
		cb(res);
	} catch (err) {
		console.log(err);
		cb(err);
	}
};
