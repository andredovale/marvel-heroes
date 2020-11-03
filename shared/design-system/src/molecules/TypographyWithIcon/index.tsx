import React, { ButtonHTMLAttributes, forwardRef } from "react";

import { Icon, Typography } from "atoms";
import { Props as IconProps } from "atoms/Icon";
import { Props as TypographyProps } from "atoms/Typography";

import { Container } from "./styled";

export interface Props {
	variant?: "button";
	buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
	children?: React.ReactNode;
	iconProps?: IconProps;
	typographyProps?: TypographyProps;
}

const TypographyWithIcon = forwardRef<any, Props>(
	(
		{
			variant,
			buttonProps,
			children,
			iconProps,
			typographyProps,
			/** This props is necessary to extend with anoter styled instance;
			 * basically is className and theme props for inheritance
			 */
			...props
		}: Props,
		ref
	) => (
		<Container
			ref={ref}
			as={variant}
			{...props}
			{...(variant === "button" ? buttonProps : {})}
		>
			<Icon {...iconProps} />
			<Typography {...typographyProps}>{children}</Typography>
		</Container>
	)
);

export default TypographyWithIcon;
