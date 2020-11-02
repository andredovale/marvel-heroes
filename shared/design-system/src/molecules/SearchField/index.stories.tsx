import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Molecules/SearchField",
	component: Source,
} as Meta;

export const SearchField: Story<Props> = (args) => <Source {...args} />;

SearchField.parameters = {
	layout: "centered",
};
