import React from "react";
import { render, screen } from "custom/@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToggleWithAdornment from "..";

test("<ToggleWithAdornment /> render", () => {
	let checked = false;

	const onChange = jest.fn((event) => (checked = event.target.checked));
	render(
		<ToggleWithAdornment toggleProps={{ onChange }}>
			Lorem ipsum
		</ToggleWithAdornment>
	);

	expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument();

	const button = screen.getByRole("button");

	userEvent.click(button);
	expect(checked).toBe(true);
});
