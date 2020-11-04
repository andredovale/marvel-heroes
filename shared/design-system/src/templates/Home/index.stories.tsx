import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";
import mock from "./__mock__";

export default {
	title: "Templates/Home",
	component: Source,
} as Meta;

const style = { width: 1366 };

export const Home: Story<Props> = (args) => (
	<div style={style}>
		<Source {...args} />
	</div>
);

Home.args = mock;

Home.parameters = {
	layout: "centered",
};
