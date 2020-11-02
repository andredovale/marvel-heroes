import React from "react";
import { render, screen } from "custom/@testing-library/react";

import InputText from "..";

const toNumber = (input: string) => Number(input.replace(/[^\d.]+/g, ""));

test("<InputText /> render", () => {
	const { rerender } = render(<InputText />);

	const textbox = screen.getByRole("textbox");
	const height = toNumber(getComputedStyle(textbox).height);
	const paddingLeft = toNumber(getComputedStyle(textbox).paddingLeft);

	expect(textbox).toBeInTheDocument();

	rerender(<InputText variant="large" paddingLeft="20em" />);

	const newHeight = toNumber(getComputedStyle(textbox).height);
	const newPaddingLeft = toNumber(getComputedStyle(textbox).paddingLeft);

	expect(newHeight > height).toBe(true);
	expect(newPaddingLeft > paddingLeft).toBe(true);
});
