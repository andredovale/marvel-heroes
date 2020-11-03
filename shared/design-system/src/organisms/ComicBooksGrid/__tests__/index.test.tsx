import React from "react";
import { render, screen } from "custom/@testing-library/react";

import ComicBooksGrid from "..";

test("<ComicBooksGrid /> render", () => {
	const props = {
		comics: [
			{
				href: "https://www.google.com/",
				target: "_blank",
				uid: "123",
				imageSrc: "https://picsum.photos/400/600",
				name: "Lorem Ipsum Dolor Sit.",
			},
			{
				href: "https://www.google.com/",
				target: "_blank",
				uid: "456",
				imageSrc: "https://picsum.photos/400/600",
				name: "Lorem Ipsum Dolor Sit.",
			},
		],
	};

	render(<ComicBooksGrid {...props} />);

	expect(screen.getAllByRole("link").length).toBe(props.comics.length);
});
