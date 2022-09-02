/* eslint-disable react-hooks/exhaustive-deps */
import { GetBillingApi } from "./Api Method/billing";
import { useState, useEffect, useContext, createContext } from "react";
import { GetProductApi } from "./Api Method/product";
import { LoggedInUserApi } from "./Api Method/user";
import { GetCartApi } from "./Api Method/cart";
// import Items from "./Components/Cart/Item/Item";

const AppContext = createContext();
const AppProvider = ({ children }) => {
	const id = localStorage.getItem("userId");
	const token = localStorage.getItem("token");
	const [isLoading, setIsLoading] = useState(false);
	// auth and user database method
	const [user, setUser] = useState("");
	useEffect(() => {
		LoggedInUserApi((res) => {
			if (res.data) {
				res.data.success && setUser(res.data.success);
			} else {
				console.log(res.error.errorMsg);
			}
		});
	}, [setUser]);

	// product database method
	const [products, setProducts] = useState([]);
	useEffect(() => {
		GetProductApi((res) => {
			if (res.data) {
				res.data.success && setProducts(res.data.success);
				res.data.error && console.log(res.data.error);
			} else {
				console.log(res.error.errorMsg);
			}
		});
	}, []);

	// cart Data
	const [cartData, setCartData] = useState({});
	const [cartItem, setCartItem] = useState([]);
	useEffect(() => {
		GetCartApi((res) => {
			if (res.data) {
				if (res.data.success) {
					setCartData(res.data.success);
					setCartItem(res.data.success.products);
				} else {
					res.data.error && console.log(res.data.error);
				}
			} else {
				console.log(res.error.errorMsg);
			}
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
		GetBillingApi((res) => {
			if (res.data) {
				res.data.success && setBillings(res.data.success.address);
				res.data.error && console.log(res.data.error);
			} else {
				console.log(res.error.errorMsg);
			}
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
