import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Molecules/HeroCard",
	component: Source,
} as Meta;

export const HeroCard: Story<Props> = (args) => <Source {...args} />;

HeroCard.args = {
	href: "https://www.google.com/",
	target: "_blank",
	uid: "123",
	imageSrc: "https://picsum.photos/400/600",
	name: "Star-Lord",
	isFavorited: false,
	onFavorite: () => {},
};

HeroCard.parameters = {
	layout: "centered",
};
