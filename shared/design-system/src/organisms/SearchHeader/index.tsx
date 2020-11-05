import React, {
	InputHTMLAttributes,
	ButtonHTMLAttributes,
	forwardRef,
} from "react";

import { Props as ToggleProps } from "atoms/Toggle";
import * as Icons from "atoms/Icon/assets";

import { Container, Title, Toggle, Button } from "./styled";

export interface Props {
	title: string;
	toggleChecked: InputHTMLAttributes<HTMLInputElement>["checked"];
	toggleText: string;
	onToggle: NonNullable<ToggleProps["onChange"]>;
	buttonIcons: Record<Props["buttonState"], keyof typeof Icons>;
	buttonState: "active" | "unactive";
	buttonText: string;
	onButtonClick: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

const SearchHeader = forwardRef<any, Props>(
	(
		{
			title,
			toggleChecked,
			toggleText,
			onToggle,
			buttonIcons,
			buttonState,
			buttonText,
			onButtonClick,
		}: Props,
		ref
	) => (
		<Container ref={ref}>
			<Title>{title}</Title>
			<Toggle
				toggleProps={{ checked: toggleChecked, onChange: onToggle }}
			>
				{toggleText}
			</Toggle>
			<Button
				iconProps={{ icon: buttonIcons[buttonState], size: 19 }}
				buttonProps={{
					onClick: onButtonClick,
				}}
			>
				{buttonText}
			</Button>
		</Container>
	)
);

export default SearchHeader;
