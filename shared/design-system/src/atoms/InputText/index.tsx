import React, { forwardRef, InputHTMLAttributes } from "react";

import { colors } from "quarks";

import { Input } from "./styled";

export interface InputTextTheme {
	variant: "small" | "large";
	backgroundColor: keyof typeof colors;
	caretColor: keyof typeof colors;
	textColor: keyof typeof colors;
	paddingLeft?: string;
}

export interface Props
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "type">,
		Partial<InputTextTheme> {}

const InputText = forwardRef<any, Props>(
	(
		{
			variant = "small",
			backgroundColor = "white",
			caretColor = "tundora",
			textColor = "tundora",
			...props
		}: Props,
		ref
	) => (
		<Input
			type="text"
			ref={ref}
			{...props}
			{...{
				variant,
				backgroundColor,
				caretColor,
				textColor,
			}}
		/>
	)
);

export default InputText;
