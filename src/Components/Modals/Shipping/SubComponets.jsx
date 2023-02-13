import { toast } from "react-toastify";
import { DeleteBillingApi } from "../../../Api Method/billing";
import { useGlobalContext } from "../../../context";
import { toastObj } from "../../../utils/toastObj";
export const Address = ({ item, handleModals }) => {
	const { billings, setBillings, setBillingEdit, setCurrentBilling } =
		useGlobalContext();

	// handle billing delete
	const BillingHandler = () => {
		handleModals("loading", true);
		DeleteBillingApi(item._id, (res) => {
			if (res.status === 204) {
				setBillings((p) => p.filter((i) => i._id !== item._id));
				res.data.success && toast.success(`Billing Deleted`, toastObj);
				res.data.error && toast.error("Deleting failed");
			} else {
				res.error && toast.error("Connection failed", toastObj);
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
			<input
				type="radio"
				id={item._id}
				onChange={selectHandler}
				value={item._id}
				name="address"
			/>{" "}
			<label htmlFor={item._id}>
				<p>Name: {item.name} </p>
				<p>Email: {item.email}</p>
				<p> Address: {item.address}</p>
				<p>Phone: {item.phone}</p>
				<p>Postcode: {item.postcode}</p>
			</label>
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
		</div>
	);
};
