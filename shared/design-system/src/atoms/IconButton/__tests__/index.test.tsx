import React from "react";
import { render, screen } from "custom/@testing-library/react";
import userEvent from "@testing-library/user-event";

import IconButton from "..";

test("<IconButton /> render", () => {
	const onClick = jest.fn();
	render(<IconButton onClick={onClick} />);

	const button = screen.getByRole("button");

	userEvent.click(button);
	expect(onClick).toBeCalled();
});
