import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../App";

test("<App /> render", () => {
	const { container } = render(<App />);

	expect(container.querySelector("code")).toBeInTheDocument();

	expect(screen.getByDisplayValue("1")).toBeInTheDocument();
	expect(screen.getByDisplayValue("2")).toBeInTheDocument();
	expect(screen.getByDisplayValue("3")).toBeInTheDocument();
});
