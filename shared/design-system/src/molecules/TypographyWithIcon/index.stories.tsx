import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Atoms/TypographyWithIcon",
	component: Source,
} as Meta;

export const TypographyWithIcon: Story<Props> = (args) => <Source {...args} />;

TypographyWithIcon.args = {
	children: "Lorem ipsum dolor sit",
};

TypographyWithIcon.parameters = {
	layout: "centered",
};
