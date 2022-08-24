import { userRequest } from "../utils/requestMethod";
// get carts
export const getCart = async (callback) => {
	const userId = localStorage.getItem("userId");
	const { data } = await userRequest.get(`carts/find/${userId}`);
	callback(data);
};
// create a cart
export const addToCart = async (cartData, callback) => {
	const userId = localStorage.getItem("userId");
	const { data } = await userRequest.post(`/carts/${userId}`, {
		cartData,
	});
	callback(data);
	getCart(userId, (data) => {
		callback(data);
	});
	// console.log(data);
};

export const deleteOneCart = async (userId, productId) => {
	await userRequest.post(`/carts/${productId}`, { userId });
};
