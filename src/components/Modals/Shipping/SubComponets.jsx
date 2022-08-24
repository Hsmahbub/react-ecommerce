import { DeleteBilling } from "../../../Database Managment/billing";
import { useGlobalContext } from "../../../context";
import { toast } from "react-toastify";
import { toastObj } from "../../../utils/toastObj";
export const Address = ({ item, handleModals }) => {
	const {
		billings,
		setBillings,
		setBillingEdit,
		currentBilling,
		setCurrentBilling,
	} = useGlobalContext();

	// handle billing delete
	const BillingHandler = (id) => {
		handleModals("loading", true);
		DeleteBilling(item._id, (res) => {
			setBillings(billings.filter((i) => i._id !== id));
			res.data.success
				? toast.success(`Billing Deleted`, toastObj)
				: toast.error("Deleting failed");
		});
		handleModals("loading", false);
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
			<button
				className="btn-romove"
				onClick={() => BillingHandler(item._id)}
			>
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
