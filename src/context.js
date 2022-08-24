/* eslint-disable react-hooks/exhaustive-deps */
import { GetBilling } from "./Database Managment/billing";
import { useState, useEffect, useContext, createContext } from "react";
import { getProduct } from "./Database Managment/product";
import { LoginUser } from "./Database Managment/auth";
import { getCart } from "./Database Managment/cart";
import Items from "./Components/Cart/Item/Item";
const AppContext = createContext();
const AppProvider = ({ children }) => {
	const id = localStorage.getItem("userId");
	const token = localStorage.getItem("token");
	const [isLoading, setIsLoading] = useState(false);
	// auth and user database method
	const [user, setUser] = useState("");
	useEffect(() => {
		LoginUser(id, (res) => {
			setUser(res.data.success.user);
		});
	}, [setUser]);

	// product database method
	const [products, setProducts] = useState([]);
	useEffect(() => {
		getProduct((data) => setProducts(data));
	}, []);

	// cart Data
	const [cartData, setCartData] = useState({});
	const [cartItem, setCartItem] = useState([]);
	useEffect(() => {
		getCart((d) => {
			setCartData(d);
			setCartItem(d.products);
		});
	}, [id, token]);

	// handleModals
	const handleModals = (id, isOpen) => {
		const app = document.querySelector(".App");
		let elementId = document.getElementById(id);
		if (isOpen) {
			app.style.height = "100vh";
			app.style.overflowY = "hidden";
			elementId.style.transform = "translateY(0px)";
			elementId.style.opacity = "1";
			return true;
		} else {
			app.style.height = "unset";
			app.style.overflowY = "scroll";
			elementId.style.transform = "translateY(-100vh)";
			elementId.style.opacity = "0";
			return false;
		}
	};

	//billings
	const [billings, setBillings] = useState([]);
	const [currentBilling, setCurrentBilling] = useState({});
	const [BillingEdit, setBillingEdit] = useState({
		isEdit: false,
		id: "",
	});
	useEffect(() => {
		GetBilling((res) => {
			res.data.success
				? setBillings(res.data.success.billings)
				: setBillings([]);
		});
	}, [setBillings]);
	return (
		<AppContext.Provider
			value={{
				isLoading,
				setIsLoading,
				//auth
				user,
				setUser,
				//product
				products,
				// cart
				cartItem,
				setCartItem,
				cartData,
				setCartData,

				// for modals
				handleModals,
				// handleEditModal,
				// handleShippingModals,

				//billigs
				billings,
				setBillings,
				BillingEdit,
				setBillingEdit,
				currentBilling,
				setCurrentBilling,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export default AppProvider;
export const useGlobalContext = () => useContext(AppContext);
