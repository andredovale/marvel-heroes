import React from "react";
import {
	render,
	screen,
} from "@marvel-heroes/design-system/src/custom/@testing-library/react";

import App from "../App";

test("<App /> render", () => {
	render(<App />);

	expect(screen.getByText(/search/i)).toBeInTheDocument();
});
