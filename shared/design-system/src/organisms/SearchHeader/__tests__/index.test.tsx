import React from "react";
import { render, screen } from "custom/@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as Icons from "atoms/Icon/assets";

import SearchHeader from "..";

test("<SearchHeader /> render", () => {
	let checked = false;
	let buttonState: "active" | "unactive" = "unactive";

	const props = {
		title: "Encontrados 20 heróis",
		toggleText: "Ordenar por nome - A/Z",
		onToggle: jest.fn((event) => (checked = event.currentTarget.checked)),
		buttonIcons: {
			active: "Heart" as keyof typeof Icons,
			unactive: "EmptyHeart" as keyof typeof Icons,
		},
		buttonText: "Somente favoritos",
		buttonState,
		onButtonClick: jest.fn(() =>
			buttonState === "unactive"
				? (buttonState = "active")
				: (buttonState = "unactive")
		),
	};

	render(<SearchHeader {...props} />);

	const toggle = screen.getByText(props.toggleText);
	const button = screen.getByText(props.buttonText);

	expect(screen.getByText(props.title)).toBeInTheDocument();
	expect(toggle).toBeInTheDocument();
	expect(button).toBeInTheDocument();

	userEvent.click(toggle);

	expect(checked).toBe(true);

	userEvent.click(button);

	expect(buttonState).toBe("active");
});
