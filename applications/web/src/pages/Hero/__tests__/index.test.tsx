import React from "react";
import {
	render,
	screen,
} from "@marvel-heroes/design-system/src/custom/@testing-library/react";
import { Router } from "react-router-dom";
import { RouterProps } from "react-router";

import Hero from "../";

jest.mock("axios-hooks", () => ({
	__esModule: true,
	default: () => [{ data: undefined, loading: true }],
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

test("<Hero /> render the loading text", () => {
	render(
		<Router history={history}>
			<Hero />
		</Router>
	);

	expect(screen.getByText(/carregando/i)).toBeInTheDocument();
});
