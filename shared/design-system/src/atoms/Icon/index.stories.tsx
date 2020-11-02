import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Atoms/Icon",
	component: Source,
} as Meta;

export const Icon: Story<Props> = (args) => <Source {...args} />;

Icon.parameters = {
	layout: "centered",
};
