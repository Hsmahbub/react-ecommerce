import { publicRequest } from "../utils/requestMethod";

export const SignupApi = async (user, cb) => {
	try {
		const res = await publicRequest.post("auth/register", {
			user: user,
		});
		cb(res);
	} catch (e) {
		let error = {
			errorMsg: "Please check your internet connection",
			error: e,
		};
		cb({ error });
	}
};
export const LoginApi = async (user, cb) => {
	try {
		const res = await publicRequest.post("/auth/login", {
			user: user,
		});
		if (res.data.success) {
			localStorage.setItem("userToken", res.data.success.token);
			localStorage.setItem("userId", res.data.success.user._id);
		}
		cb(res);
	} catch (err) {
		const error = {
			errorMsg: "Please check your internet connection",
			err,
		};
		cb({ error });
	}
};

export const AdminSignupApi = async (user, cb) => {
	try {
		const res = await publicRequest.post("auth/admin/signup", {
			user: user,
		});
		cb(res);
	} catch (e) {
		let error = {
			errorMsg: "Please check your internet connection",
			error: e,
		};
		cb({ error });
	}
};
export const AdminLoginApi = async (user, cb) => {
	try {
		const res = await publicRequest.post("/auth/admin/login", {
			user: user,
		});
		if (res.data.success) {
			localStorage.setItem("adminToken", res.data.success.token);
			localStorage.setItem("adminId", res.data.success.user._id);
		}
		cb(res);
	} catch (err) {
		const error = {
			errorMsg: "Please check your internet connection",
			err,
		};
		cb({ error });
	}
};

export const LogoutApi = async () => {
	localStorage.clear();
};
