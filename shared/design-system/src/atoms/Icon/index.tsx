import React, { forwardRef, SVGAttributes } from "react";

import { colors } from "quarks";

import * as Icons from "./assets";
import { Container } from "./styled";

export interface IconTheme {
	fill: keyof typeof colors;
	opacity: number;
	size: number;
}

export interface Props
	extends Omit<
			SVGAttributes<SVGElement>,
			"fill" | "height" | "opacity" | "width"
		>,
		Partial<IconTheme> {
	icon?: keyof typeof Icons;
}

const Icon = forwardRef<any, Props>(
	(
		{
			fill = "scarlet",
			opacity = 1,
			size = 32,
			icon = "Hero",
			...props
		}: Props,
		ref
	) => (
		<Container
			ref={ref}
			{...{
				fill,
				opacity,
				size,
			}}
		>
			{React.createElement(Icons[icon], {
				...props,
				role: "img",
				title: icon,
			})}
		</Container>
	)
);

export default Icon;
