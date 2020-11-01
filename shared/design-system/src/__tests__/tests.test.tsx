import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { A, B } from "../tests";

test("<A /> render", () => {
	const { container, rerender } = render(<A />);

	expect(container.querySelector("code")).not.toBeInTheDocument();

	rerender(<A lorem="ipsum" />);

	expect(container.querySelector("code")).toBeInTheDocument();
});

test("<B /> render", () => {
	render(<B />);

	const first = screen.getAllByRole("spinbutton")[0];
	const second = screen.getAllByRole("spinbutton")[1];
	const total = screen.getAllByRole("spinbutton")[2];

	expect(first).toBeInTheDocument();
	expect(second).toBeInTheDocument();
	expect(total).toBeInTheDocument();

	userEvent.type(first, "2");

	expect(total).toHaveDisplayValue("4");

	userEvent.type(second, "3");

	expect(total).toHaveDisplayValue("5");
});
