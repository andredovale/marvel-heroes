import React from "react";
import { render, screen } from "custom/@testing-library/react";

import SearchField from "..";

test("<SearchField /> render", () => {
	const { rerender } = render(<SearchField />);

	expect(screen.getByRole("img")).toBeInTheDocument();
	expect(screen.getByPlaceholderText(/procure/i)).toBeInTheDocument();

	const input = screen.getByRole("textbox");
	const height = getComputedStyle(input).height;

	rerender(<SearchField placeholder="" variant="large" />);
	expect(screen.queryByPlaceholderText(/procure/i)).not.toBeInTheDocument();

	const newHeight = getComputedStyle(input).height;
	expect(height !== newHeight).toBe(true);
});
