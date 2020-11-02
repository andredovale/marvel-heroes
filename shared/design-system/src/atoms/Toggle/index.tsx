import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import cuid from "cuid";

import { colors } from "quarks";

import { Checkbox, FakeCheckbox } from "./styled";

export interface ToggleTheme {
	backgroundColor: keyof typeof colors;
	innerCheckedColor: keyof typeof colors;
	innerUncheckedColor: keyof typeof colors;
}

export interface Props
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type">,
		Partial<ToggleTheme> {}

const Toggle = forwardRef<any, Props>(
	(
		{
			backgroundColor = "silver",
			innerCheckedColor = "scarlet",
			innerUncheckedColor = "scarlet",
			...props
		}: Props,
		ref
	) => {
		const [id] = useState(cuid());

		return (
			<>
				<Checkbox id={id} {...props} />
				<FakeCheckbox
					htmlFor={id}
					ref={ref}
					{...{
						backgroundColor,
						innerCheckedColor,
						innerUncheckedColor,
					}}
				/>
			</>
		);
	}
);

export default Toggle;
