import axios from "axios";
// const server = "http://localhost:4000/api";
const server = "https://shop-api-etl3.onrender.com/api";
const BASE_URL = server;
const userToken = localStorage.getItem("userToken");
const adminToken = localStorage.getItem("adminToken");
export const publicRequest = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

export const userRequest = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		Authorization: `Bearer ${userToken}`,
		"Content-Type": "application/json",
	},
});
export const adminRequest = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		Authorization: `Bearer ${adminToken}`,
		"Content-Type": "application/json",
	},
});
