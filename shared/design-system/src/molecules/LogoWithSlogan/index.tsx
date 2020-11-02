import React, { AnchorHTMLAttributes, forwardRef } from "react";

import { Logo, Typography } from "atoms";
import { Props as LogoProps } from "atoms/Logo";
import { Props as TypographyProps } from "atoms/Typography";

import { Container } from "./styled";

export interface LogoWithSloganTheme {
	variant: LogoProps["variant"];
}

export interface Props
	extends AnchorHTMLAttributes<HTMLAnchorElement>,
		Partial<LogoWithSloganTheme> {
	logoProps?: Omit<LogoProps, "variant">;
	typographyProps?: Omit<TypographyProps, "variant">;
}

const LogoWithSlogan = forwardRef<any, Props>(
	(
		{ variant = "small", logoProps, typographyProps, ...props }: Props,
		ref
	) => (
		<Container ref={ref} variant={variant} {...props}>
			<Logo {...logoProps} variant={variant} />
			<Typography {...typographyProps} variant="slogan">
				Search heros
			</Typography>
		</Container>
	)
);

export default LogoWithSlogan;
