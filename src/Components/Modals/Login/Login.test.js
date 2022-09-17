import "@testing-library/jest-dom";
import AppProvider from "../../../context";
import Login from "./Login";

import { fireEvent, render, screen } from "@testing-library/react";

jest.mock('axios', () => ({
	userRequest:{}
}));
//test for username input field
test("label text should be username and input should be  rendered", () => {
	render(
		<AppProvider>
			<Login />
		</AppProvider>
	);
	expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
	expect(screen.getByPlaceholderText(/Email or Phone/i)).toBeInTheDocument();
});
test("username input value should be empty", () => {
	render(
		<AppProvider>
			<Login />
		</AppProvider>
	);
	const inputEl = screen.getByPlaceholderText(/Email or Phone/i);
	expect(inputEl.value).toBe("");
});
test("username input value should not be empty after onChange", () => {
	render(
		<AppProvider>
			<Login />
		</AppProvider>
	);
	const testInput = "test";
	const userNameInputEl = screen.getByPlaceholderText(/Email or Phone/i);
	fireEvent.change(userNameInputEl, { target: { value: testInput } });
	expect(userNameInputEl.value).toBe(testInput);
});

// test for password input field
test("label text should be password and input should be rendered", () => {
	render(
		<AppProvider>
			<Login />
		</AppProvider>
	);
	expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});
test("password input value should be empty", () => {
	render(
		<AppProvider>
			<Login />
		</AppProvider>
	);
	const passwordInputEl = screen.getByPlaceholderText(/Password/i);
	expect(passwordInputEl.value).toBe("");
});
test("password input value should not be empty after onChange", () => {
	render(
		<AppProvider>
			<Login />
		</AppProvider>
	);
	const testInput = "test";
	const passwordInputEl = screen.getByPlaceholderText(/Password/i);
	fireEvent.change(passwordInputEl, { target: { value: testInput } });
	expect(passwordInputEl.value).toBe(testInput);
});

//test for submit button
test("submit button  should be rendered", () => {
	render(
		<AppProvider>
			<Login />
		</AppProvider>
	);
	const buttonEl = screen.getByText(/submit/i);
	expect(buttonEl).toBeInTheDocument();
});

// test for dont have an account button
test("don't have an account should be rendered", () => {
	render(
		<AppProvider>
			<Login />
		</AppProvider>
	);
	expect(screen.getByText("don't have an account?")).toBeInTheDocument();
});
