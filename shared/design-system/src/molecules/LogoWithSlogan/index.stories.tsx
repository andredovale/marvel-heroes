import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Molecules/LogoWithSlogan",
	component: Source,
} as Meta;

export const LogoWithSlogan: Story<Props> = (args) => <Source {...args} />;

LogoWithSlogan.args = {
	href: "#",
	target: "_self",
};

LogoWithSlogan.parameters = {
	layout: "centered",
};
