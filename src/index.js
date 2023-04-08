import React from "react";
import ReactDOM from "react-dom";
import "./utils/functions";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import { GetOrderApi, validateOrder } from "./Api Method/order";
import App from "./App";
import OrderSucces from "./Components/OrderSucces/OrderSucces";
import {
	Carts,
	Checkout,
	Details,
	Home,
	Login,
	OrederPage,
	SearchPage,
	Signup,
	UserDetails,
} from "./Pages/index";
import AppProvider from "./context";
import "./index.css";
import { GetCartApi } from "./Api Method/cart";
import { GetProductApi, searchProductApi } from "./Api Method/product";
import Search from "./Components/Search/Search";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		loader: GetCartApi,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: GetProductApi,
			},
			{
				path: "/checkout/:productIds",
				element: <Checkout />,
				loader: async ({ request, params }) => {
					const cart = await GetCartApi();
					const productId = params.productIds;
					const arrayOfId = productId?.split("_");
					const data = cart.data.filter((i) =>
						arrayOfId.includes(i._id)
					);

					const totalPrice = data
						.map((i) => i.total_price)
						.reduce((a, b) => a + b);
					const totalItems = data
						.map((i) => i.quantity)
						.reduce((a, b) => a + b);
					return { data, arrayOfId, totalPrice, totalItems };
				},
			},
			{
				path: "/order-confirm/:order_id/:createdAt",
				element: <OrderSucces />,
				loader: validateOrder,
			},
			{
				path: "carts",
				element: <Carts />,
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
				path: "profile",
				element: <UserDetails />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "signup",
				element: <Signup />,
			},
			{
				path: "search",
				element: <SearchPage />,
				loader: searchProductApi,
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
