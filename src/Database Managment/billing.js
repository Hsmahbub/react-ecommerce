import { userRequest } from "../utils/requestMethod";
export const CreateBilling = async (billing, callback) => {
	const id = localStorage.getItem("userId");
	const res = await userRequest.post(`billings/${id}`, { billing });
	callback(res);
};

export const GetBilling = async (callback) => {
	const _id = localStorage.getItem("userId");
	const res = await userRequest.get(`/billings/${_id}`);
	callback(res);
};

export const UpdateBilling = async (billing, callback) => {
	const _id = localStorage.getItem("userId");
	const res = await userRequest.put(`/billings/${_id}`, {
		billing,
	});
	callback(res);
};

export const DeleteBilling = async (email, callback) => {
	const id = localStorage.getItem("userId");
	const res = await userRequest.post(`/billings/delete/${id}`, {
		email,
	});
	callback(res);
};
