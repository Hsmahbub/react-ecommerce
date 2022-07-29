import {
	Home,
	Cart,
	Checkout,
	Category,
	SignupForm,
	LoginForm,
	Profile
} from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/category" element={<Category />} />
					<Route path="/signup" element={<SignupForm />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
