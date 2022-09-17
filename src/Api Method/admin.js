import { adminRequest } from "../utils/requestMethod";

export const UpdateAdminApi = async (updateData, cb) => {
	try {
		const res = await adminRequest.put(`/admins`, {
			update: updateData,
		});
		cb(res);
	} catch (err) {
		const error = { errorMsg: "Connection failed", err };
		cb({ error });
	}
};

export const DeleteAdminApi = async (deleteData, cb) => {
	try {
		const res = await adminRequest.delete(`/admins`, {
			delete: deleteData,
		});
		cb(res);
	} catch (err) {
		const error = { errorMsg: "Connection failed", err };
		cb({ error });
	}
};
export const LoggedInAdminApi = async (cb) => {
	try {
		const res = await adminRequest.get(`/admins`);
		cb(res);
	} catch (err) {
		const error = { errorMsg: "Connection failed", err };
		cb({ error });
	}
};
