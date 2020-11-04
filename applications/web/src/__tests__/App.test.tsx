import React from "react";
import {
	render,
	screen,
	fireEvent,
} from "@marvel-heroes/design-system/src/custom/@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

test("<App /> render", () => {
	jest.spyOn(console, "log").mockImplementation(jest.fn());

	render(<App />);

	expect(screen.getByText(/explore/i)).toBeInTheDocument();

	const input = screen.getByRole("textbox");
	fireEvent.submit(input);

	expect(window.console.log).toBeCalled();

	const label = screen.getByText(/ordenar/i);
	userEvent.click(label);

	expect(window.console.log).toBeCalled();

	const favorite = screen.getByText(/favoritos/i);
	userEvent.click(favorite);

	expect(window.console.log).toBeCalled();

	const lastHeroEmptyHeart = screen.getAllByRole("button").pop();
	userEvent.click(lastHeroEmptyHeart as HTMLElement);

	expect(window.console.log).toBeCalled();
});
