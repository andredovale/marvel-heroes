import React, { forwardRef } from "react";

import { Header, HeroesGrid, SearchHeader } from "organisms";
import { Props as HeaderProps } from "organisms/Header";
import { Props as HeroesGridProps } from "organisms/HeroesGrid";
import { Props as SearchHeaderProps } from "organisms/SearchHeader";

import {
	Container,
	Wrapper,
	Header as LocalHeader,
	Content,
	Spacer,
	Warning,
	Footer,
} from "./styled";

interface InnerContentProps {
	heroesGridProps: HeroesGridProps;
	error?: boolean;
	errorText: string;
	loading?: boolean;
	loadingText: string;
	noFavorite?: boolean;
	noFavoriteText: string;
	noDataText: string;
}
export interface Props extends InnerContentProps {
	headerProps: Omit<HeaderProps, "variant">;
	searchHeaderProps: SearchHeaderProps;
}

const InnerContent = forwardRef<any, InnerContentProps>(
	(
		{
			heroesGridProps,
			error,
			errorText,
			loading,
			loadingText,
			noFavorite,
			noFavoriteText,
			noDataText,
		},
		ref
	) => {
		if (error) return <Warning ref={ref}>{errorText}</Warning>;

		if (loading) return <Warning ref={ref}>{loadingText}</Warning>;

		if (noFavorite) return <Warning ref={ref}>{noFavoriteText}</Warning>;

		if (!heroesGridProps.heroes || !heroesGridProps.heroes.length)
			return <Warning ref={ref}>{noDataText}</Warning>;

		return <HeroesGrid {...heroesGridProps} ref={ref} />;
	}
);

const Home = forwardRef<any, Props>(
	({ headerProps, searchHeaderProps, ...props }: Props, ref) => (
		<Container ref={ref}>
			<Wrapper>
				<LocalHeader>
					<Header {...headerProps} variant="large" />
				</LocalHeader>
				{!!headerProps?.searchFieldProps?.inputTextProps?.value && (
					<Content>
						{!!headerProps.searchFieldProps.inputTextProps
							.value && <SearchHeader {...searchHeaderProps} />}
						<Spacer />
						<InnerContent {...props} />
					</Content>
				)}
			</Wrapper>
			<Footer
				noValue={!headerProps?.searchFieldProps?.inputTextProps?.value}
			/>
		</Container>
	)
);

export default Home;
