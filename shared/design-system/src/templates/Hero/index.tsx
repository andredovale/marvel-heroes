import React, { forwardRef } from "react";

import { ComicBooksGrid, Header, HeroDetails } from "organisms";
import { Props as HeaderProps } from "organisms/Header";
import { Props as HeroDetailsProps } from "organisms/HeroDetails";
import { Props as ComicBooksGridProps } from "organisms/ComicBooksGrid";

import {
	Container,
	Wrapper,
	Header as LocalHeader,
	Content,
	Warning,
	Article,
	BigHero,
	MovieThumbnail,
	HighDefinitionPhoto,
	ComicBooksTitle,
	Footer,
} from "./styled";

export interface HeroTheme {
	backgroundColor: string;
}

interface InnerContentProps extends HeroTheme {
	heroDetailsProps: HeroDetailsProps;
	error?: boolean;
	errorText: string;
	loading?: boolean;
	loadingText: string;
	movieThumbnail?: string;
	highDefinitionPhoto?: string;
	comicBooksTitle: string;
	comicBooksGridProps: ComicBooksGridProps;
}
export interface Props
	extends Partial<HeroTheme>,
		Omit<InnerContentProps, "backgroundColor"> {
	headerProps: Omit<HeaderProps, "variant">;
}

const InnerContent = forwardRef<any, InnerContentProps>(
	(
		{
			heroDetailsProps,
			error,
			errorText,
			loading,
			loadingText,
			movieThumbnail,
			backgroundColor,
			highDefinitionPhoto,
			comicBooksTitle,
			comicBooksGridProps,
		},
		ref
	) => {
		if (error) return <Warning ref={ref}>{errorText}</Warning>;

		if (loading) return <Warning ref={ref}>{loadingText}</Warning>;

		return (
			<>
				<Article>
					<HeroDetails {...heroDetailsProps} />
					<BigHero>{heroDetailsProps.name}</BigHero>
					{!!movieThumbnail && (
						<MovieThumbnail
							backgroundColor={backgroundColor}
							alt={heroDetailsProps.name}
							src={movieThumbnail}
						/>
					)}
					{!!highDefinitionPhoto && (
						<HighDefinitionPhoto
							alt={heroDetailsProps.name}
							src={highDefinitionPhoto}
						/>
					)}
				</Article>
				<ComicBooksTitle>{comicBooksTitle}</ComicBooksTitle>
				<ComicBooksGrid {...comicBooksGridProps} />
			</>
		);
	}
);

const Hero = forwardRef<any, Props>(
	({ backgroundColor = "#E7F6E7", headerProps, ...props }: Props, ref) => (
		<Container ref={ref} backgroundColor={backgroundColor}>
			<Wrapper>
				<LocalHeader>
					<Header {...headerProps} variant="small" />
				</LocalHeader>
				<Content>
					<InnerContent
						{...props}
						backgroundColor={backgroundColor}
					/>
				</Content>
			</Wrapper>
			<Footer />
		</Container>
	)
);

export default Hero;
