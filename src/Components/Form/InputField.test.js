import InputField from "./InputField";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should first empty", () => {
	render(
		<InputField
			fieldName="name"
			placeholder="name"
			type="text"
			value=""
			onChange={() => {}}
			isRequired={true}
		/>
	);
	const inputEl = screen.getAllByPlaceholderText(/name/i);
	expect(inputEl).toBeInTheDocument();
});
