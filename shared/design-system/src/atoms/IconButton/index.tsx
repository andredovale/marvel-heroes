import React, { ButtonHTMLAttributes, forwardRef } from "react";

import Icon, { Props as IconProps } from "atoms/Icon";

import { Button } from "./styled";

export interface Props extends Omit<IconProps, "onClick"> {
	onClick: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

const IconButton = forwardRef<any, Props>(
	({ onClick, ...props }: Props, ref) => (
		<Button onClick={onClick}>
			<Icon {...props} />
		</Button>
	)
);

export default IconButton;
