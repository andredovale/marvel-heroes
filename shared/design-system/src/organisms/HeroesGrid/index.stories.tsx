import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Organisms/HeroesGrid",
	component: Source,
} as Meta;

const style = { width: 800 };

export const HeroesGrid: Story<Props> = (args) => (
	<div style={style}>
		<Source {...args} />
	</div>
);

HeroesGrid.args = {
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
		{
			href: "https://www.google.com/",
			target: "_blank",
			uid: "789",
			imageSrc: "https://picsum.photos/400/600",
			name: "Star-Lord",
			isFavorited: false,
		},
		{
			href: "https://www.google.com/",
			target: "_blank",
			uid: "012",
			imageSrc: "https://picsum.photos/400/600",
			name: "Star-Lord",
			isFavorited: false,
		},
		{
			href: "https://www.google.com/",
			target: "_blank",
			uid: "345",
			imageSrc: "https://picsum.photos/400/600",
			name: "Star-Lord",
			isFavorited: false,
		},
	],
	onFavorite: () => {},
};

HeroesGrid.parameters = {
	layout: "centered",
};
