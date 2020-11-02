import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Atoms/Typography",
	component: Source,
} as Meta;

export const Typography: Story<Props> = (args) => <Source {...args} />;

Typography.args = {
	children: "Lorem ipsum dolor sit",
};

Typography.parameters = {
	layout: "centered",
};
