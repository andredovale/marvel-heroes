import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Atoms/Logo",
	component: Source,
} as Meta;

export const Logo: Story<Props> = (args) => <Source {...args} />;

Logo.parameters = {
	layout: "centered",
};
