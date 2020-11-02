import React from "react";
import { render, screen } from "custom/@testing-library/react";

import ComicBookCard from "..";

test("<ComicBookCard /> render", () => {
	const props = {
		href: "https://www.google.com/",
		target: "_blank",
		uid: "123",
		imageSrc: "https://picsum.photos/400/600",
		name: "Lorem Ipsum Dolor Sit.",
	};

	render(<ComicBookCard {...props} />);

	expect(screen.getByRole("img", { name: props.name })).toBeInTheDocument();
	expect(screen.getByText(props.name)).toBeInTheDocument();
});
