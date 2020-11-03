import React, { forwardRef, SVGAttributes } from "react";

import { colors } from "quarks";

import { ReactComponent as Marvel } from "./assets/logo.svg";

export interface LogoTheme {}

export interface Props
	extends Omit<
			SVGAttributes<SVGElement>,
			"fill" | "height" | "title" | "width"
		>,
		Partial<LogoTheme> {
	fill?: keyof typeof colors;
	variant?: "large" | "small";
}

const Logo = forwardRef<any, Props>(
	({ fill = "red", variant = "small", ...props }: Props, ref) => (
		<Marvel
			ref={ref}
			fill={colors[fill]}
			height={undefined}
			title="Marvel"
			width={variant === "small" ? 88 : 191}
			{...props}
		/>
	)
);

export default Logo;
