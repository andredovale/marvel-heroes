import React, { forwardRef, HTMLAttributes } from "react";

import { colors, typography } from "quarks";

import { Text } from "./styled";

export interface TypographyTheme {
	color: keyof typeof colors;
	lineHeight: number;
	opacity: number;
	variant: keyof typeof typography;
}

export interface Props
	extends Omit<HTMLAttributes<HTMLElement>, "color">,
		Partial<TypographyTheme> {
	as?: string | React.ComponentType<any>;
}

const Typography = forwardRef<any, Props>(
	(
		{
			color = "tundora",
			lineHeight = 1.2,
			opacity = 1,
			variant = "normal",
			as = "p",
			...props
		}: Props,
		ref
	) => (
		<Text
			ref={ref}
			as={as}
			{...{
				color,
				lineHeight,
				opacity,
				variant,
			}}
			{...props}
		/>
	)
);

export default Typography;
