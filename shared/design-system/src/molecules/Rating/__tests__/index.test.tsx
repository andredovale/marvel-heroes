import React from "react";
import { render, screen } from "custom/@testing-library/react";

import Rating from "..";

test("<Rating /> render", () => {
	const { rerender } = render(<Rating value={0} />);

	expect(screen.getAllByRole("img").length).toBe(5);

	rerender(<Rating value={1} />);

	expect(
		(screen.getAllByRole("img")[0].parentNode as HTMLElement).getAttribute(
			"opacity"
		)
	).toBe("1");
});
