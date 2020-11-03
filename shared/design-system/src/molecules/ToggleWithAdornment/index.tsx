import React, { forwardRef, useRef } from "react";

import { Toggle } from "atoms";
import { Props as ToggleProps } from "atoms/Toggle";
import { TypographyWithIcon } from "molecules";
import { Props as TypographyWithIconProps } from "molecules/TypographyWithIcon";

import { Container } from "./styled";

export interface Props {
	children: TypographyWithIconProps["children"];
	typographyWithIconProps?: Omit<TypographyWithIconProps, "children">;
	toggleProps?: ToggleProps;
}

const ToggleWithAdornment = forwardRef<any, Props>(
	(
		{
			children,
			toggleProps,
			typographyWithIconProps: {
				typographyProps,
				...typographyWithIconProps
			} = {},
		}: Props,
		ref
	) => {
		const label = useRef<HTMLLabelElement>();

		const onClick = (
			event: React.MouseEvent<HTMLButtonElement, MouseEvent>
		) => {
			if ((event.target as HTMLLabelElement).tagName.match(/label/i))
				return;
			label.current?.click();
		};

		return (
			<Container ref={ref} onClick={onClick}>
				<TypographyWithIcon
					{...typographyWithIconProps}
					typographyProps={{
						color: "scarlet",
						opacity: 0.6,
						...typographyProps,
					}}
				>
					{children}
				</TypographyWithIcon>
				<Toggle {...toggleProps} ref={label} />
			</Container>
		);
	}
);

export default ToggleWithAdornment;
