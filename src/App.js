import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
	BillingForm,
	Loading,
	Login,
	Shipping,
	Signup,
} from "./Components/Modals/index.js";
import { Footer, Navbar, Topheader } from "./Components";
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
			<Topheader />
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
