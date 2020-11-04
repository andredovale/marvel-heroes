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
	NoContent,
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

export interface Props extends Partial<HeroTheme> {
	headerProps: Omit<HeaderProps, "variant">;
	noContentText: string;
	heroDetailsProps: HeroDetailsProps;
	movieThumbnail?: string;
	highDefinitionPhoto?: string;
	comicBooksTitle: string;
	comicBooksGridProps: ComicBooksGridProps;
}

const Hero = forwardRef<any, Props>(
	(
		{
			backgroundColor = "#E7F6E7",
			headerProps,
			noContentText,
			heroDetailsProps,
			movieThumbnail,
			highDefinitionPhoto,
			comicBooksTitle,
			comicBooksGridProps,
		}: Props,
		ref
	) => (
		<Container ref={ref} backgroundColor={backgroundColor}>
			<Wrapper>
				<LocalHeader>
					<Header {...headerProps} variant="small" />
				</LocalHeader>
				<Content>
					{!heroDetailsProps || !heroDetailsProps.name ? (
						<NoContent>{noContentText}</NoContent>
					) : (
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
					)}
				</Content>
			</Wrapper>
			<Footer />
		</Container>
	)
);

export default Hero;
