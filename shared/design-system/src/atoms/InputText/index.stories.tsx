import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Atoms/InputText",
	component: Source,
} as Meta;

export const InputText: Story<Props> = (args) => <Source {...args} />;

InputText.args = {
	placeholder: "Lorem ipsum dolor",
};

InputText.parameters = {
	layout: "centered",
};
