import { userRequest } from "../utils/requestMethod";
export const CreateBillingApi = async (billing, cb) => {
	try {
		const res = await userRequest.post(`/billings/`, { billing });
		cb(res);
	} catch (err) {
		const error = {
			errorMsg: "Connection failed",
			err,
		};
		cb({ error });
	}
};

export const GetBillingApi = async (cb) => {
	try {
		const res = await userRequest.get(`/billings/`);
		cb(res);
	} catch (err) {
		const error = {
			errorMsg: "Connection failed",
			err,
		};
		cb({ error });
	}
};

export const UpdateBillingApi = async (billing, id, cb) => {
	try {
		const res = await userRequest.put(`/billings/${id}`, {
			billing,
		});
		cb(res);
	} catch (err) {
		console.log(err)
		let error = {
			errorMsg: "Connection failed",
			err,
		};
		cb({ error });
	}
};

export const DeleteBillingApi = async (id, cb) => {
	try {
		const res = await userRequest.delete(`/billings/${id}`);
		cb(res);
	} catch (err) {
		const error = {
			errorMsg: "Connection failed",
			err,
		};
		cb({ error });
	}
};
