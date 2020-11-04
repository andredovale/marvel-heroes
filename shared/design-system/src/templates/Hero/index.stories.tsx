import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";
import mock from "./__mock__";

export default {
	title: "Templates/Hero",
	component: Source,
} as Meta;

const style = { width: 1366 };

export const Hero: Story<Props> = (args) => (
	<div style={style}>
		<Source {...args} />
	</div>
);

Hero.args = mock;

Hero.parameters = {
	layout: "centered",
};
