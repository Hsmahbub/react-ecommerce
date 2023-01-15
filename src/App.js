import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./Admin/Admin";
import { AdminLogin, AdminSignup } from "./Admin/Components/index.js";
import "./App.css";
import {
	BillingForm,
	Loading, Login, Shipping, Signup
} from "./Components/Modals/index.js";
import {
	Carts, Checkout,
	Details, Home, OrederPage, SearchPage, UserDetails
} from "./Pages/index";
function App() {
	return (
		<div className="App" >
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Shipping />
			<BillingForm />
			<Login />
			<Signup />
			<Loading />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product/:id" element={<Details />} />
					<Route path="/carts" element={<Carts />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="/checkout/" element={<Checkout />} />
					<Route path="/order" element={<OrederPage />} />
					<Route path="/user" element={<UserDetails />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/admin/login" element={<AdminLogin />} />
					<Route path="/admin/signup" element={<AdminSignup />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
