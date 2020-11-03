import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Molecules/Rating",
	component: Source,
} as Meta;

export const Rating: Story<Props> = (args) => <Source {...args} />;

Rating.parameters = {
	layout: "centered",
};
