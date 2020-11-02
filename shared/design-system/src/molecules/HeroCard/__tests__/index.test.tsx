import React from "react";
import { render, screen } from "custom/@testing-library/react";
import userEvent from "@testing-library/user-event";

import HeroCard from "..";

test("<HeroCard /> render", () => {
	const props = {
		href: "https://www.google.com/",
		target: "_blank",
		uid: "123",
		imageSrc: "https://picsum.photos/400/600",
		name: "Star-Lord",
		isFavorited: false,
		onFavorite: jest.fn(),
	};

	const { rerender } = render(<HeroCard {...props} />);

	expect(screen.getByRole("img", { name: props.name })).toBeInTheDocument();
	expect(screen.getByText(props.name)).toBeInTheDocument();
	expect(screen.getByTitle(/emptyheart/i)).toBeInTheDocument();

	const button = screen.getByRole("button");

	userEvent.click(button);

	expect(props.onFavorite).toBeCalled();

	rerender(<HeroCard {...props} isFavorited />);

	expect(screen.queryByTitle(/emptyheart/i)).not.toBeInTheDocument();
	expect(screen.getByTitle(/heart/i)).toBeInTheDocument();
});
