import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Molecules/ComicBookCard",
	component: Source,
} as Meta;

export const ComicBookCard: Story<Props> = (args) => <Source {...args} />;

ComicBookCard.args = {
	href: "https://www.google.com/",
	target: "_blank",
	uid: "123",
	imageSrc: "https://picsum.photos/400/600",
	name: "Lorem Ipsum Dolor Sit.",
};

ComicBookCard.parameters = {
	layout: "centered",
};
