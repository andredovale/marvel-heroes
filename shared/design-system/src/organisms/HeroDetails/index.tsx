import React, { forwardRef } from "react";

import Rating, { Props as RatingProps } from "molecules/Rating";

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
import { Icon } from "atoms";
import { TypographyWithIcon } from "molecules";

export interface Props {
	name: string;
	isFavorited: boolean;
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
			name,
			isFavorited,
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
				<Icon icon={isFavorited ? "Heart" : "EmptyHeart"} />
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
