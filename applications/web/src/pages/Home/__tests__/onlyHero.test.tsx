import React from "react";
import {
	render,
	screen,
} from "@marvel-heroes/design-system/src/custom/@testing-library/react";
import { Router } from "react-router-dom";
import { RouterProps } from "react-router";

import mock from "@marvel-heroes/utils/src/Heroes/__mocks__/heroes";

import Home from "..";

const mockExecute = jest.fn();

jest.mock("axios-hooks", () => ({
	__esModule: true,
	default: () => [
		{ data: { data: { results: mock } }, loading: false },
		mockExecute,
	],
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
	// This is necessary to show characters
	localStorage.setItem(
		"marvelHeroes",
		JSON.stringify({ search: { input: { value: "Hulk" } } })
	);

	render(
		<Router history={history}>
			<Home />
		</Router>
	);

	expect(screen.getByText(mock[0].name)).toBeInTheDocument();
});

test("<Home /> not show hero isn't favorited", () => {
	// This is necessary to show characters
	localStorage.setItem(
		"marvelHeroes",
		JSON.stringify({
			search: {
				input: { value: "Hulk" },
				settings: { onlyFavorites: "active" },
			},
		})
	);

	render(
		<Router history={history}>
			<Home />
		</Router>
	);

	expect(screen.queryByText(/nenhum herói favorito/i)).toBeInTheDocument();
	expect(screen.queryByText(mock[0].name)).not.toBeInTheDocument();
});
