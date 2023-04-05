import React from "react";
import ReactDOM from "react-dom";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import {
	Carts,
	Checkout,
	Details,
	Home,
	OrederPage,
	SearchPage,
	UserDetails,
} from "./Pages/index";
import AppProvider from "./context";
import "./index.css";
import Login from "./Pages/Login/Login";
import { GetOrderApi } from "./Api Method/order";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/checkout/:productIds",
				element: <Checkout />,
				loader: ({ request }) =>
					fetch("/api/dashboard.json", {
						signal: request.signal,
					}),
			},
			{
				path: "carts",
				element: <Carts />,
				loader: ({ request }) =>
					fetch("/api/dashboard.json", {
						signal: request.signal,
					}),
			},
			{
				path: "orders",
				element: <OrederPage />,
				loader: GetOrderApi,
			},
			{
				path: "/product/:id",
				element: <Details />,
			},
			{
				path: "search",
				element: <SearchPage />,
			},
			{
				path: "profile",
				element: <UserDetails />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "",
				element: <Navigate to="/home" replace />,
			},
		],
	},
]);
ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
