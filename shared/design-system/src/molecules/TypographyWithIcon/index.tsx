import React, { forwardRef } from "react";

import { Icon, Typography } from "atoms";
import { Props as IconProps } from "atoms/Icon";
import { Props as TypographyProps } from "atoms/Typography";

import { Container } from "./styled";

export interface Props {
	children?: React.ReactNode;
	iconProps?: IconProps;
	typographyProps?: TypographyProps;
}

const TypographyWithIcon = forwardRef<any, Props>(
	({ children, iconProps, typographyProps }: Props, ref) => (
		<Container ref={ref}>
			<Icon {...iconProps} />
			<Typography {...typographyProps}>{children}</Typography>
		</Container>
	)
);

export default TypographyWithIcon;
