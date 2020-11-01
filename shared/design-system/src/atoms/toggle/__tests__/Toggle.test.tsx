import React from "react";
import { render, screen } from "custom/@testing-library/react";
import userEvent from "@testing-library/user-event";

import Toggle from "../";

test("<Toggle /> render", () => {
	render(<Toggle />);

	const checkbox = screen.getByRole("checkbox", { hidden: true });

	expect(checkbox).toBeInTheDocument();

	const label = screen.getByLabelText("");

	userEvent.click(label);
	expect(checkbox).toBeChecked();

	userEvent.click(label);
	expect(checkbox).not.toBeChecked();
});
