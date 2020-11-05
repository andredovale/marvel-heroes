import React from "react";
import {
	render,
	screen,
} from "@marvel-heroes/design-system/src/custom/@testing-library/react";
import { Router } from "react-router-dom";
import { RouterProps } from "react-router";

import Hero from "..";

const mockComic = {
	urls: [{ type: "detail", url: "http://google.com" }],
	id: "456",
	thumbnail: {
		path: "https://picsum.photos/10/10",
		extension: "jpg",
	},
	title: "Lorem ipsum dolor",
	dates: [{ type: "onsaleDate", date: "2029-12-31T00:00:00-0500" }],
};

const mockHero = {
	id: "123",
	name: "Hulk",
	description:
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad fugiat, praesentium sunt nemo itaque, aperiam, quam amet quisquam dignissimos quidem neque nesciunt nulla est molestias obcaecati nobis magnam dolores cupiditate?",
	comics: {
		avaliable: 3000,
	},
	thumbnail: {
		path: "https://picsum.photos/10/10",
		extension: "jpg",
	},
	// Fallback to last comic book
	urls: [{ type: "detail", url: "http://google.com" }],
	dates: [{ type: "onsaleDate", date: "2029-12-31T00:00:00-0500" }],
};

jest.mock("axios-hooks", () => ({
	__esModule: true,
	default: () => [
		{ data: { data: { results: [mockHero, mockComic] } }, loading: false },
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

test("<Hero /> render a valid hero and comic books", async () => {
	render(
		<Router history={history}>
			<Hero />
		</Router>
	);

	expect(screen.getByText(/2029/)).toBeInTheDocument();

	expect(screen.getAllByText(mockHero.name)[0]).toBeInTheDocument();

	// To compare with bonus
	expect(screen.getAllByAltText(mockHero.name).length).toBe(1);
});
