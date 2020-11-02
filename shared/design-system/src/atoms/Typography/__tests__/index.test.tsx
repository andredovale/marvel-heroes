import React from "react";
import { render, screen } from "custom/@testing-library/react";

import Typography from "..";

test("<Typography /> render", () => {
	render(<Typography>Lorem ipsum</Typography>);

	expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument();
});
