import axios from "axios";
const local__server = "http://localhost:4000/api";
const cloud__server = "http://mahbub-commerce.herokuapp.com/api";
const BASE_URL = local__server;
const userToken = localStorage.getItem("userToken");
const adminToken = localStorage.getItem("adminToken");
export const publicRequest = axios.create({
	baseURL: BASE_URL,
});
export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: `Bearer ${userToken}`,
		"Content-Type": "application/json",
	},
});
export const adminRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: `Bearer ${adminToken}`,
		"Content-Type": "application/json",
	},
});
