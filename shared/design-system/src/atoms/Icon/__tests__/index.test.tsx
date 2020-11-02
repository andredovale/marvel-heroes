import React from "react";
import { render, screen } from "custom/@testing-library/react";

import Icon from "..";

test("<Icon /> render", () => {
	const { rerender } = render(<Icon />);

	expect(screen.getByRole("img")).toBeInTheDocument();
	expect(screen.getByTitle("Hero")).toBeInTheDocument();

	rerender(<Icon icon="Heart" />);
	expect(screen.getByTitle("Heart")).toBeInTheDocument();
});
