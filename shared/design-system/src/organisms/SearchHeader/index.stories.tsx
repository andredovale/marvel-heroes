import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Organisms/SearchHeader",
	component: Source,
} as Meta;

const style = { width: 1104 };

export const SearchHeader: Story<Props> = (args) => {
	const [buttonState, setButtonState] = useState<"active" | "unactive">(
		"unactive"
	);
	const onButtonClick = () => {
		buttonState === "active"
			? setButtonState("unactive")
			: setButtonState("active");
	};
	return (
		<div style={style}>
			<Source
				{...args}
				buttonState={buttonState}
				onButtonClick={onButtonClick}
			/>
		</div>
	);
};

SearchHeader.args = {
	title: "Encontrados 20 heróis",
	toggleText: "Ordenar por nome - A/Z",
	onToggle: (event) => console.log({ onToggle: event.currentTarget.checked }),
	buttonIcons: { active: "Heart", unactive: "EmptyHeart" },
	buttonText: "Somente favoritos",
};

SearchHeader.parameters = {
	layout: "centered",
};
