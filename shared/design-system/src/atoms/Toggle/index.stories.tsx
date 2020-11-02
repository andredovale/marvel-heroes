import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Atoms/Toggle",
	component: Source,
} as Meta;

export const Toggle: Story<Props> = (args) => <Source {...args} />;

Toggle.parameters = {
	layout: "centered",
};
