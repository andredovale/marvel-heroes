import React from "react";
import { render, screen } from "custom/@testing-library/react";

import HeroesGrid from "..";

test("<HeroesGrid /> render", () => {
	const props = {
		heroes: [
			{
				href: "https://www.google.com/",
				target: "_blank",
				uid: "123",
				imageSrc: "https://picsum.photos/400/600",
				name: "Star-Lord",
				isFavorited: false,
			},
			{
				href: "https://www.google.com/",
				target: "_blank",
				uid: "456",
				imageSrc: "https://picsum.photos/400/600",
				name: "Star-Lord",
				isFavorited: false,
			},
		],
		onFavorite: jest.fn(),
	};

	render(<HeroesGrid {...props} />);

	expect(screen.getAllByRole("link").length).toBe(props.heroes.length);
});
