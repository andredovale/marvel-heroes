import React from "react";
import { render, screen } from "custom/@testing-library/react";

import LogoWithSlogan from "..";

test("<LogoWithSlogan /> render", () => {
	const { rerender } = render(<LogoWithSlogan />);

	expect(screen.getByTitle("Marvel")).toBeInTheDocument();
	expect(screen.getByText(/heros/i)).toBeInTheDocument();

	rerender(<LogoWithSlogan variant="large" />);

	expect(screen.getByTitle("Marvel")).toBeInTheDocument();
	expect(screen.getByText(/heros/i)).toBeInTheDocument();
});
