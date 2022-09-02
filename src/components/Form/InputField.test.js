import InputField from "./InputField";
import { screen, render } from "@testing-library/react";

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
});
