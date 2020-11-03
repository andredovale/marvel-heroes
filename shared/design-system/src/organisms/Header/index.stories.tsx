import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Organisms/Header",
	component: Source,
} as Meta;

const style = { width: 1138 };

export const Header: Story<Props> = (args) => (
	<div style={style}>
		<Source {...args} />
	</div>
);

Header.args = {
	title: "Explore o universo",
	subtitle:
		"Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!",
	onSubmit: (_, value) => console.log({ value }),
};

Header.parameters = {
	layout: "centered",
};
