import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Molecules/ToggleWithAdornment",
	component: Source,
} as Meta;

export const ToggleWithAdornment: Story<Props> = (args) => <Source {...args} />;

ToggleWithAdornment.args = {
	children: "Ordenar por nome - A/Z",
};

ToggleWithAdornment.parameters = {
	layout: "centered",
};
