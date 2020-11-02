import React, { AnchorHTMLAttributes, forwardRef } from "react";

import { Typography } from "atoms";
import { Props as TypographyProps } from "atoms/Typography";

import { Card, Photo } from "./styled";

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	uid: string;
	imageSrc: string;
	name: string;
	typographProps?: Omit<
		TypographyProps,
		"lineHeight" | "variant" | "children"
	>;
}

const ComicBookCard = forwardRef<any, Props>(
	({ uid, imageSrc, name, typographProps, ...props }: Props, ref) => (
		<Card ref={ref} {...props}>
			<Photo>
				<img alt={name} src={imageSrc} />
			</Photo>
			<Typography
				{...typographProps}
				lineHeight={1.48}
				variant="normal-bold"
			>
				{name}
			</Typography>
		</Card>
	)
);

export default ComicBookCard;
