import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Atoms/IconButton",
	component: Source,
} as Meta;

export const IconButton: Story<Props> = (args) => <Source {...args} />;

IconButton.parameters = {
	layout: "centered",
};
