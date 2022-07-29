import { useState, useEffect, useContext, createContext } from "react";
import { getUserById } from "./Database Managment/user";
import { getProduct } from "./Database Managment/product";
const AppContext = createContext();
const AppProvider = ({ children }) => {
	// auth and user database method
	const [loginData, setLoginData] = useState();
	const id = localStorage.getItem("id") && localStorage.getItem("id");
	useEffect(() => {
		getUserById(id, (data) => {
			setLoginData(data);
			// console.log(loginData);
		});
	}, [id, loginData]);
	// product database method
	
	const [products, setProducts] = useState();
	useEffect(() => {
		getProduct((data) => setProducts(data));
	}, []);
	
	// for cart page
	return (
		<AppContext.Provider
			value={{
				//auth
				loginData,
				setLoginData,
				//product
				products,
				// cart
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
export default AppProvider;
export const useGlobalContext = () => useContext(AppContext);
