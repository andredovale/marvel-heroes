import React from "react";
import {
	fireEvent,
	render,
	screen,
} from "@marvel-heroes/design-system/src/custom/@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { RouterProps } from "react-router";

import Home from "../";

const mockExecute = jest.fn();

jest.mock("axios-hooks", () => ({
	__esModule: true,
	default: () => [{ data: undefined, loading: false }, mockExecute],
}));

afterEach(() => {
	window.localStorage.clear();
});

const history = ({
	createHref: jest.fn(),
	listen: jest.fn(),
	location: {
		pathname: "/",
	},
	replace: jest.fn(),
} as unknown) as RouterProps["history"];

test("<Home /> render", () => {
	render(
		<Router history={history}>
			<Home />
		</Router>
	);

	expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("<Home /> render based on another path", () => {
	render(
		<Router
			history={
				{
					...history,
					location: { pathname: "/123/123/123" },
				} as RouterProps["history"]
			}
		>
			<Home />
		</Router>
	);

	expect(history.replace).toBeCalledWith("/");
});

test("<Home /> change value", () => {
	render(
		<Router history={history}>
			<Home />
		</Router>
	);

	const input = screen.getByRole("textbox");

	userEvent.type(input, "Hulk");

	expect(screen.getByDisplayValue("Hulk")).toBeInTheDocument();
});

test("<Home /> toggle order", () => {
	// This is necessary to show SearchHeader
	localStorage.setItem(
		"marvelHeroes",
		JSON.stringify({ search: { input: { value: "Hulk" } } })
	);

	render(
		<Router history={history}>
			<Home />
		</Router>
	);

	const orderToggle = screen.getByRole("button", { name: /a\/z/i });

	userEvent.click(orderToggle);

	expect(
		screen.queryByRole("button", { name: /a\/z/i })
	).not.toBeInTheDocument();
	expect(screen.getByRole("button", { name: /z\/a/i })).toBeInTheDocument();

	userEvent.click(orderToggle);

	expect(
		screen.queryByRole("button", { name: /z\/a/i })
	).not.toBeInTheDocument();
	expect(screen.getByRole("button", { name: /a\/z/i })).toBeInTheDocument();
});

test("<Home /> submit", () => {
	// This is necessary to show SearchHeader
	localStorage.setItem(
		"marvelHeroes",
		JSON.stringify({ search: { input: { value: "Hulk" } } })
	);

	render(
		<Router history={history}>
			<Home />
		</Router>
	);

	const input = screen.getByRole("textbox");

	fireEvent.submit(input);

	expect(mockExecute).toBeCalled();

	userEvent.type(input, "Spider");
	fireEvent.submit(input);

	expect(mockExecute).toBeCalled();
});

test("<Home /> toggle only favorites", () => {
	// This is necessary to show SearchHeader
	localStorage.setItem(
		"marvelHeroes",
		JSON.stringify({ search: { input: { value: "Hulk" } } })
	);

	render(
		<Router history={history}>
			<Home />
		</Router>
	);

	const onlyFavorites = screen.getByRole("button", { name: /favorito/i });

	userEvent.click(onlyFavorites);

	expect(
		screen.queryByRole("button", {
			name: /empty-heart/i,
		})
	).not.toBeInTheDocument();

	userEvent.click(onlyFavorites);

	expect(
		screen.getByRole("button", {
			name: /empty-heart/i,
		})
	).toBeInTheDocument();
});
