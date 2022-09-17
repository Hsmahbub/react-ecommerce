/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext, createContext } from "react";
const AdminContext = createContext();
const AdminProvider = ({ children }) => {
	//adming
	const [admin, setAdmin] = useState(null);
	return (
		<AdminContext.Provider
			value={{
				//admin
				admin,
				setAdmin,
			}}
		>
			{children}
		</AdminContext.Provider>
	);
};
export default AdminProvider;
export const useAdminContext = () => useContext(AdminContext);
