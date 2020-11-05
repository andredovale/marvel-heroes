import React, { forwardRef } from "react";

import { IconButton } from "atoms";
import { Props as IconButtonProps } from "atoms/IconButton";
import { Rating, TypographyWithIcon } from "molecules";
import { Props as RatingProps } from "molecules/Rating";

import {
	Container,
	Header,
	Name,
	Description,
	Counters,
	Counter,
	CounterTitle,
	RatingTitle,
	LastComic,
} from "./styled";

export interface Props {
	uid: string;
	name: string;
	isFavorited: boolean;
	iconButtonProps?: Omit<IconButtonProps, "icon" | "onClick">;
	onFavorite: (uid: Props["uid"], isFavorited: Props["isFavorited"]) => void;
	description: string;
	comicBooksTitle: string;
	comicBooksCount: number;
	moviesTitle: string;
	moviesCount: number;
	ratingTitle: string;
	ratingValue: RatingProps["value"];
	lastComicTitle: string;
	lastComicDate: string;
}

const HeroDetails = forwardRef<any, Props>(
	(
		{
			uid,
			name,
			isFavorited,
			iconButtonProps,
			onFavorite,
			description,
			comicBooksTitle,
			comicBooksCount,
			moviesTitle,
			moviesCount,
			ratingTitle,
			ratingValue,
			lastComicTitle,
			lastComicDate,
		}: Props,
		ref
	) => (
		<Container ref={ref}>
			<Header>
				<Name>{name}</Name>
				<IconButton
					{...iconButtonProps}
					icon={isFavorited ? "Heart" : "EmptyHeart"}
					onClick={(event) => {
						event.preventDefault();
						onFavorite(uid, !isFavorited);
					}}
				/>
			</Header>
			<Description>{description}</Description>
			<Counters>
				<Counter>
					<CounterTitle>{comicBooksTitle}</CounterTitle>
					<TypographyWithIcon
						iconProps={{ icon: "ComicBook", size: 32 }}
					>
						{comicBooksCount}
					</TypographyWithIcon>
				</Counter>
				<Counter>
					<CounterTitle>{moviesTitle}</CounterTitle>
					<TypographyWithIcon iconProps={{ icon: "Movie", size: 32 }}>
						{moviesCount}
					</TypographyWithIcon>
				</Counter>
			</Counters>
			<div>
				<RatingTitle>{ratingTitle}</RatingTitle>
				<Rating value={ratingValue} />
			</div>
			<LastComic>
				<strong>{lastComicTitle}</strong>
				{lastComicDate}
			</LastComic>
		</Container>
	)
);

export default HeroDetails;
