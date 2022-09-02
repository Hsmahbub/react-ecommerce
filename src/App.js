import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
	Shipping,
	Login,
	Signup,
	BillingForm,
	Loading,
} from "./Components/Modals/index";
import {
	Address,
	Carts,
	Category,
	Checkout,
	Details,
	OrederPage,
	Home,
} from "./pages/index";
function App() {
	return (
		<div className="App">
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
					<Route path="/address" element={<Address />} />
					<Route path="/carts" element={<Carts />} />
					<Route path="/checkout/" element={<Checkout />} />
					<Route path="/category" element={<Category />} />
					<Route path="/order" element={<OrederPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
