import { userRequest } from "../requestMethod";
export const getUserById = async (id, callback) => {
	const data = await userRequest.get(`/users/find/${id}`);
    callback(data.data);
};
export const updateUserById = async (id, updateData, callback) => {
	const { data } = await userRequest.put(`/users/${id}`, {
		update: updateData,
	});
	callback(data);
};

export const deleteUserById = async (id, deleteData, callback) => {
	const { data } = await userRequest.delete(`/users/${id}`, {
		delete: deleteData,
	});
	callback(data);
};
export const getAllUser = async (callback) => {
    const { data } = await userRequest.get(`/users`);
    callback(data)
};
