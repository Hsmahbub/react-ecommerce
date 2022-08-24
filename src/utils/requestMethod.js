import axios from "axios";
const localUrl = "http://localhost:4000/api";
const cloudUrl = "http://mahbub-commerce.herokuapp.com/api";
const BASE_URL = localUrl;
const token = localStorage.getItem("token");
export const publicRequest = axios.create({
	baseURL: BASE_URL,
});
export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: `Bearer ${token}`,
		"Content-Type": "application/json",
	},
});
