/* eslint-disable react-hooks/exhaustive-deps */
import { GetBillingApi } from "./Api Method/billing";
import { LoggedInAdminApi } from "./Api Method/admin";
import { useState, useEffect, useContext, createContext } from "react";
import { LoggedInUserApi } from "./Api Method/user";
// import Items from "./Components/Cart/Item/Item";

const AppContext = createContext();
const AppProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);

	//billings
	const [billings, setBillings] = useState([]);
	const [currentBilling, setCurrentBilling] = useState({});
	const [BillingEdit, setBillingEdit] = useState({
		isEdit: false,
		id: "",
	});

	const [user, setUser] = useState("");
	useEffect(() => {
		LoggedInUserApi((res) => {
			if (res?.status === 200) {
				res.data && setUser(res.data);
				setCurrentBilling(res.data.default_billing);
			}
		});
	}, []);

	// product database method

	// cart Data
	const [cartData, setCartData] = useState([]);

	// handleModals
	const handleModals = (id, isOpen) => {
		const app = document.querySelector(".App");
		let elementId = document.getElementById(id);
		if (isOpen) {
			app.style.height = "100vh";
			app.style.overflowY = "hidden";
			elementId.style.position = "fixed";
			elementId.style.zIndex = "1";
			elementId.style.opacity = "1";

			return true;
		} else {
			app.style.height = "unset";
			app.style.overflowY = "scroll";
			elementId.style.zIndex = "-1";
			elementId.style.opacity = "0";
			if (id === "loading") {
				app.style.height = "100vh";
				app.style.overflowY = "hidden";
			}
			return false;
		}
	};

	useEffect(() => {
		GetBillingApi((res) => {
			if (res?.status === 200) {
				setBillings(res.data);
			} else {
				console.log(res?.data.message);
			}
		});
	}, []);

	//adming
	const [admin, setAdmin] = useState({});

	useEffect(() => {
		LoggedInAdminApi((res) => {
			if (res.data) {
				if (res.data.error) {
					console.log(res.data);
				} else {
					setAdmin(res.data.success);
				}
			} else {
				// console.log(res);
			}
		});
	}, []);
	return (
		<AppContext.Provider
			value={{
				isLoading,
				setIsLoading,

				//auth
				user,
				setUser,

				// cart
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

				//admin
				admin,
				setAdmin,
			}}>
			{children}
		</AppContext.Provider>
	);
};
export default AppProvider;
export const useGlobalContext = () => useContext(AppContext);
