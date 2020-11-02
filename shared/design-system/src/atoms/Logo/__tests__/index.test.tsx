import React from "react";
import { render, screen } from "custom/@testing-library/react";

import Logo from "..";

test("<Logo /> render", () => {
	const { rerender } = render(<Logo />);

	const logo = screen.getByTitle("Marvel");
	expect(logo).toBeInTheDocument();

	const width = logo.getAttribute("width");

	rerender(<Logo variant="large" />);

	const newWidth = logo.getAttribute("width");

	expect(width !== newWidth).toBe(true);
});
