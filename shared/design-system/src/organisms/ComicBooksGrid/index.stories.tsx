import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Organisms/ComicBooksGrid",
	component: Source,
} as Meta;

const style = { width: 800 };

export const ComicBooksGrid: Story<Props> = (args) => (
	<div style={style}>
		<Source {...args} />
	</div>
);

ComicBooksGrid.args = {
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
		{
			href: "https://www.google.com/",
			target: "_blank",
			uid: "789",
			imageSrc: "https://picsum.photos/400/600",
			name: "Lorem Ipsum Dolor Sit.",
		},
		{
			href: "https://www.google.com/",
			target: "_blank",
			uid: "012",
			imageSrc: "https://picsum.photos/400/600",
			name: "Lorem Ipsum Dolor Sit.",
		},
		{
			href: "https://www.google.com/",
			target: "_blank",
			uid: "345",
			imageSrc: "https://picsum.photos/400/600",
			name: "Lorem Ipsum Dolor Sit.",
		},
		{
			href: "https://www.google.com/",
			target: "_blank",
			uid: "678",
			imageSrc: "https://picsum.photos/400/600",
			name: "Lorem Ipsum Dolor Sit.",
		},
		{
			href: "https://www.google.com/",
			target: "_blank",
			uid: "901",
			imageSrc: "https://picsum.photos/400/600",
			name: "Lorem Ipsum Dolor Sit.",
		},
	],
};

ComicBooksGrid.parameters = {
	layout: "centered",
};
