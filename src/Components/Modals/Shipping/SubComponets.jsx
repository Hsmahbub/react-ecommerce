import { toast } from "react-toastify";
import { DeleteBillingApi } from "../../../Api Method/billing";
import { useGlobalContext } from "../../../context";
import { toastObj } from "../../../utils/toastObj";
import { UpdateUserApi } from "../../../Api Method/user";
export const Address = ({ item, handleModals }) => {
	const { billings, setBillings, setBillingEdit, setCurrentBilling, user, setUser } =
		useGlobalContext();

	// handle billing delete
	const BillingHandler = () => {
		handleModals("loading", true);
		DeleteBillingApi(item._id, (res) => {
			if (res.status === 200) {
				setBillings((p) => p.filter((i) => i._id !== item._id));
				res.data && toast.success(`Billing Deleted`, toastObj);
			} else {
				toast.error("Connection failed", toastObj);
			}
			handleModals("loading", false);
		});
	};
	const selectHandler = (e) => {
		const filterBilling = billings.filter(
			(item) => item._id === e.target.value
		);
		let billingObject = filterBilling && filterBilling[0];
		setCurrentBilling(billingObject);
		handleModals("shipping", false);
	};

	// returned address component
	return (
		<div className="address">
			<div className="address-info">
				<input
					type="radio"
					id={item._id}
					onChange={selectHandler}
					value={item._id}
					name="address"
					checked={user?.default_billing?._id === item._id}
				/>{" "}
				<label htmlFor={item._id}>
					<p>Name: {item.name} </p>
					<p>Email: {item.email}</p>
					<p> Address: {item.address}</p>
					<p>Phone: {item.phone}</p>
					<p>Postcode: {item.postcode}</p>
				</label>
			</div>
			<div className="address-btn">
				<button className="btn-romove" onClick={BillingHandler}>
					Delete
				</button>
				<button
					onClick={() => {
						handleModals("edit-form", true);
						setBillingEdit({ isEdit: true, id: item._id });
					}}
				>
					Edit
				</button>
				<button
					disabled={user?.default_billing?._id === item._id}
					style={{ cursor: user?.default_billing?._id === item._id && 'not-allowed' }}
					onClick={() => {
						UpdateUserApi({ default_billing: item._id }, (res) => {
							if (res.status === 201) {
								setUser(res.data)
								setCurrentBilling(item)
								toast.success('Default Address Created')
								handleModals("shipping", false);
							}
						})
					}}
				>
					Make it default
				</button>
			</div>
		</div>
	);
};
