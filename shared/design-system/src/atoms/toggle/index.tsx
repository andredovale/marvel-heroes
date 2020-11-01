import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import cuid from "cuid";

import { colors } from "quarks";

import { Checkbox, FakeCheckbox } from "./styled";

export interface Props
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type"> {
	theme?: {
		backgroundColor?: keyof typeof colors;
		innerCheckedColor?: keyof typeof colors;
		innerUncheckedColor?: keyof typeof colors;
	};
}

const Toggle = forwardRef<any, Props>(({ theme, ...props }: Props, ref) => {
	const [id] = useState(cuid());

	return (
		<>
			<Checkbox id={id} {...props} />
			<FakeCheckbox htmlFor={id} ref={ref} theme={theme} />
		</>
	);
});

export default Toggle;
