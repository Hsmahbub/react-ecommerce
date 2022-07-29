import { userRequest } from "../requestMethod";

export const SignupApi = async (user, callback) => {
	try {
		const { data } = await userRequest.post("auth/register", {
			user: user,
		});
		console.log(data);
		callback(data);
	} catch (e) {
		console.log(e);
	}
};

export const LoginApi = async (user, callback) => {
	try {
		const { data } = await userRequest.post("/auth/login", { user: user });
		if (data.accessToken) {
			localStorage.setItem("token", data.accessToken);
			localStorage.setItem("id", data._id);
		}
		console.log(data);
		callback(data);
	} catch (err) {
		console.log(err);
	}
};

export const LogoutApi = async () => {
	localStorage.removeItem("token");
	localStorage.removeItem("id");
	// const { data } = await userRequest.post("auth/logout", { empty: " " });
	// console.log(data.accessToken);
};
