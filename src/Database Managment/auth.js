import { publicRequest, userRequest } from "../utils/requestMethod";

export const SignupApi = async (user, callback) => {
	try {
		const res = await publicRequest.post("auth/register", {
			user: user,
		});
		callback(res);
	} catch (e) {
		console.log(e);
	}
};
export const LoginApi = async (user, callback) => {
	try {
		const res = await publicRequest.post("/auth/login", {
			user: user,
		});
		if (res.data.success) {
			localStorage.setItem("token", res.data.success.token);
			localStorage.setItem("userId", res.data.success.user._id);
			callback(res);
		} else {
			callback(res);
		}
	} catch (err) {
		console.log(err);
	}
};

export const LogoutApi = async () => {
	localStorage.clear();
};

export const LoginUser = async (userId, callback) => {
	try {
		const res = await userRequest.get(`/auth/login/user/${userId}`);
		callback(res);
	} catch (err) {
		console.log(err);
	}
};
