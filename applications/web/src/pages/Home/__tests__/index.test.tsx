import React from "react";
import {
	render,
	screen,
	fireEvent,
} from "@marvel-heroes/design-system/src/custom/@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderHook, act } from "@testing-library/react-hooks";
import { Router } from "react-router-dom";
import { RouterProps } from "react-router";

import { useLocalStorage } from "@marvel-heroes/utils/src/Storage";

import Home from "../";
import { FAVORITES_LIMIT } from "../../../contants";

beforeEach(async () => {
	const { result } = renderHook(() =>
		useLocalStorage("marvelHeroes.search.input.value")
	);

	const value = "lorem ipsum";

	await act(async () => {
		await result.current[1].set(value);
	});
});

afterEach(() => {
	localStorage.clear();
});

const history = ({
	createHref: jest.fn(),
	listen: jest.fn(),
	location: {
		pathname: "/",
	},
	replace: jest.fn(),
} as unknown) as RouterProps["history"];

test("<Home /> render", async () => {
	localStorage.clear();

	render(
		<Router history={history}>
			<Home />
		</Router>
	);

	expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("<Home /> render based on another path", async () => {
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

test("<Home /> only favorites", async () => {
	render(
		<Router history={history}>
			<Home />
		</Router>
	);

	const onlyFavoritesButton = screen.getByRole("button", {
		name: /somente fav/i,
	});

	fireEvent.click(onlyFavoritesButton);
	expect(
		JSON.parse(localStorage.getItem("marvelHeroes") as string).search
			.settings.onlyFavorites
	).toBe("active");

	// fireEvent.click(onlyFavoritesButton);
	// expect(
	// 	JSON.parse(localStorage.getItem("marvelHeroes") as string).search
	// 		.settings.onlyFavorites
	// ).toBe("unactive");
});

test("<Home /> order by name", async () => {
	render(
		<Router history={history}>
			<Home />
		</Router>
	);

	const orderByNameButton = screen.getByText(/ordenar por/i);
	userEvent.click(orderByNameButton);

	expect(
		JSON.parse(localStorage.getItem("marvelHeroes") as string).search
			.settings.orderByName
	).toBe(true);
});

test("<Home /> change and submit search", async () => {
	jest.spyOn(console, "log").mockImplementation(() => {});

	render(
		<Router history={history}>
			<Home />
		</Router>
	);

	const input = screen.getByRole("textbox");

	fireEvent.submit(input);
	expect(window.console.log).toBeCalledWith({ value: "lorem ipsum" });

	const mockTyping = "dolor ";
	userEvent.type(input, mockTyping);
	fireEvent.submit(input);
	expect(window.console.log).toBeCalledWith({
		value: `lorem ipsum${mockTyping}`,
	});
});

test("<Home /> un/favorite a hero", async () => {
	render(
		<Router history={history}>
			<Home />
		</Router>
	);

	const favoriteActions = screen.getAllByRole("button", {
		name: "empty-heart.svg",
	});

	userEvent.click(favoriteActions[0]);

	expect(
		JSON.parse(window.localStorage.getItem("marvelHeroes") as string).heroes
			.favorites
	).toContain("123");

	userEvent.click(favoriteActions[0]);

	expect(
		JSON.parse(window.localStorage.getItem("marvelHeroes") as string).heroes
			.favorites
	).not.toContain("123");
});

test("<Home /> favorite limit", async () => {
	jest.spyOn(window, "alert").mockImplementation(() => {});

	const { result } = renderHook(() =>
		useLocalStorage("marvelHeroes.heroes.favorites")
	);

	const value = [...Array(FAVORITES_LIMIT)].map((_, index) => String(index));

	await act(async () => {
		await result.current[1].set(value);
	});

	render(
		<Router history={history}>
			<Home />
		</Router>
	);

	const favoriteActions = screen.getAllByRole("button", {
		name: "empty-heart.svg",
	});

	userEvent.click(favoriteActions[0]);

	expect(window.alert).toBeCalled();
	expect(
		JSON.parse(window.localStorage.getItem("marvelHeroes") as string).heroes
			.favorites
	).not.toContain("123");
});
