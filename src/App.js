import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Shipping, Login, Signup, Form,Loading } from "./Components/Modals/index";
import {
	Address,
	Carts,
	Category,
	Checkout,
	Details,
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
			<Form />
			<Login />
			<Signup />
			<Loading />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product/:id" element={<Details />} />
					<Route path="/address" element={<Address />} />
					<Route path="/carts" element={<Carts />} />
					<Route path="/checkout/:id" element={<Checkout />} />
					<Route path="/category" element={<Category />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
