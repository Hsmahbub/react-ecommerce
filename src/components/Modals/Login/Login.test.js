import Login from "./Login";
import "@testing-library/jest-dom";
import AppProvider from "../../../context";
import { screen, render } from "@testing-library/react";

test("label text should be username and input should be  rendered", () => {
	render(
		<AppProvider>
			<Login />
		</AppProvider>
	);
	expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
	expect(screen.getByPlaceholderText(/Email or Phone/i)).toBeInTheDocument();
});

test("label text should be password and input should be rendered", () => {
	render(
		<AppProvider>
			<Login />
		</AppProvider>
	);
	expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
	expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});

test("button  should be rendered", () => {
	render(
		<AppProvider>
			<Login />
		</AppProvider>
	);
	expect(screen.getAllByRole("button")).toBeInTheDocument();
});

test("don't have an account should be rendered", () => {
	render(
		<AppProvider>
			<Login />
		</AppProvider>
	);
	expect(screen.getByText("don't have an account?")).toBeInTheDocument();
});
test("input value should be empty", () => {
	render(
		<AppProvider>
			<Login />
		</AppProvider>
	);
	const inputEl = screen.getByPlaceholderText(/Email or Phone/i);
	expect(inputEl.value).toBe("");
	
});
