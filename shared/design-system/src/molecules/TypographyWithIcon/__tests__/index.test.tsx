import React from "react";
import { render, screen } from "custom/@testing-library/react";

import TypographyWithText from "..";

test("<TypographyWithText /> render", () => {
	render(<TypographyWithText>Lorem ipsum</TypographyWithText>);

	expect(screen.getByRole("img")).toBeInTheDocument();
	expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument();
});
