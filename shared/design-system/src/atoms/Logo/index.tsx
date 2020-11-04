import React, { forwardRef, SVGAttributes } from "react";

import { colors } from "quarks";

import { ReactComponent as Marvel } from "./assets/logo.svg";
import { Container } from "./styled";

export interface Props {
	fill?: keyof typeof colors;
	variant?: "large" | "small";
	svgProps?: Omit<
		SVGAttributes<SVGElement>,
		"fill" | "height" | "title" | "width"
	>;
}

const Logo = forwardRef<any, Props>(
	({ fill = "red", variant = "small", svgProps, ...props }: Props, ref) => (
		<Container ref={ref} {...props}>
			<Marvel
				fill={colors[fill]}
				height={undefined}
				title="Marvel"
				width={variant === "small" ? 88 : 191}
				{...svgProps}
			/>
		</Container>
	)
);

export default Logo;
