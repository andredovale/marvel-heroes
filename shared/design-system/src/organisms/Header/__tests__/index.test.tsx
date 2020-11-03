import React from "react";
import { render, screen, fireEvent } from "custom/@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "..";

test("<Header /> render", () => {
	const props = {
		title: "Explore o universo",
		subtitle:
			"Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!",
		onSubmit: jest.fn(),
	};

	const { rerender } = render(<Header {...props} />);

	expect(screen.queryByText(props.title)).not.toBeInTheDocument();
	expect(screen.queryByText(props.subtitle)).not.toBeInTheDocument();

	rerender(<Header {...props} variant="large" />);

	expect(screen.getByText(props.title)).toBeInTheDocument();
	expect(screen.getByText(props.subtitle)).toBeInTheDocument();

	const input = screen.getByRole("textbox");
	const mock = "Lorem ipsum dolor";

	userEvent.type(input, mock);

	fireEvent.submit(input);

	expect(props.onSubmit.mock.calls[0][1]).toBe(mock);
});
