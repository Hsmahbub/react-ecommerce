import { userRequest } from "../utils/requestMethod";

export const UpdateUserApi = async (updateData, cb) => {
	try {
		const res = await userRequest.put(`/users/`, {
			update: updateData,
		});
		cb(res);
	} catch (err) {
		const error = { errorMsg: "Connection failed", err };
		cb({ error });
	}
};

export const DeleteUserApi = async (deleteData, cb) => {
	try {
		const res = await userRequest.delete(`/users`, {
			delete: deleteData,
		});
		cb(res);
	} catch (err) {
		const error = { errorMsg: "Connection failed", err };
		cb({ error });
	}
};
export const LoggedInUserApi = async (cb) => {
	try {
		const res = await userRequest.get(`/users`);
		cb(res);
	} catch (err) {
		cb(err?.response);
	}
};
