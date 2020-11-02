import React, { AnchorHTMLAttributes, forwardRef } from "react";

import { IconButton, Typography } from "atoms";
import { Props as IconButtonProps } from "atoms/IconButton";
import { Props as TypographyProps } from "atoms/Typography";

import { Card, Photo, Footer } from "./styled";

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	uid: string;
	imageSrc: string;
	name: string;
	isFavorited: boolean;
	onFavorite: (uid: Props["uid"], isFavorited: Props["isFavorited"]) => void;
	typographProps?: Omit<TypographyProps, "variant" | "children">;
	iconButtonProps?: Omit<IconButtonProps, "icon" | "onClick">;
}

const HeroCard = forwardRef<any, Props>(
	(
		{
			uid,
			imageSrc,
			name,
			isFavorited,
			onFavorite,
			iconButtonProps,
			typographProps,
			...props
		}: Props,
		ref
	) => (
		<Card ref={ref} {...props}>
			<Photo>
				<img alt={name} src={imageSrc} />
			</Photo>
			<Footer>
				<Typography {...typographProps} variant="large">
					{name}
				</Typography>
				<IconButton
					{...iconButtonProps}
					icon={isFavorited ? "Heart" : "EmptyHeart"}
					onClick={(event) => {
						event.preventDefault();
						onFavorite(uid, !isFavorited);
					}}
				/>
			</Footer>
		</Card>
	)
);

export default HeroCard;
